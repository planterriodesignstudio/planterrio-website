import React, { useEffect } from 'react';
import Button from '../components/Button.jsx';
import Title from '../components/Title.jsx';
import { useParams, Navigate } from 'react-router-dom';
import { serviceData } from '../data/services.js';
import './ServicePage.css';
import CTASection from '../components/CTASection.jsx';
import ServiceBenefits from '../components/ServiceBenefits.jsx';
import WhyChooseUs from '../components/WhyChooseUs.jsx';
import SEO from '../components/SEO.jsx';

const ServicePage = () => {
    const { slug } = useParams();
    const data = serviceData[slug];

    useEffect(() => {
        window.scrollTo(0, 0);

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, { threshold: 0.1 });

        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(el => observer.observe(el));

        return () => elements.forEach(el => observer.unobserve(el));
    }, [slug]);

    if (!data) {
        return <Navigate to="/" replace />;
    }



    return (
        <div className="service-page">
            <SEO
                title={data.title}
                description={data.description}
                keywords={`${data.title}, Landscaping Bangalore, Planterrio Services`}
                url={`/services/${slug}`}
            />

            {/* 1. Header: Title & Intro */}
            <div className="container service-header animate-on-scroll">
                <Title title={data.title} subtitle={data.description} align="center" />
            </div>

            {/* 2. Top Images Side-by-Side with Context */}
            {data.topImages && (
                <div className="container service-top-images animate-on-scroll">
                    <div className="images-grid">
                        {data.topImages.map((imgData, index) => (
                            <div key={index} className="image-card">
                                <div className="image-frame">
                                    <img src={imgData.src} alt={imgData.context} />
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            )}


            {/* 3. Benefits Section */}
            <div style={{ textAlign: 'center', margin: '2rem 0' }}>
                <Button href="https://photos.app.goo.gl/mEqJUcthjS2TN4HcA" target="_blank" variant="primary">View more on drive</Button>
            </div>
            <ServiceBenefits
                title={data.title}
                intro={data.benefitsPara}
                benefitsList={data.benefitsList}
            />

            <WhyChooseUs />
            {/* 4. CTA Section */}
            <CTASection />

            {/* 5. Our Projects */}
            {data.projectImages && (
                <div className="container service-projects animate-on-scroll">
                    <Title title="Our Projects" align="center" />
                    <div className="projects-grid">
                        {data.projectImages.map((imgUrl, index) => (
                            <div key={index} className="project-item">
                                <img src={imgUrl} alt={`${data.title} Project ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <div style={{ textAlign: 'center', margin: '2rem 0', paddingBottom: '2rem' }}>
                <Button href="https://photos.app.goo.gl/mEqJUcthjS2TN4HcA" target="_blank" variant="secondary">View more on drive</Button>
            </div>
        </div>
    );
};

export default ServicePage;
