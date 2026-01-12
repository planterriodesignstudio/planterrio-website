import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { serviceData } from '../data/services';
import './ServicePage.css';

// Reusing existing components where possible or creating local ones
import Process from './Process';
import Testimonials from './Testimonials';
import FAQ from './FAQ';

const ServicePage = () => {
    const { slug } = useParams();
    const data = serviceData[slug];

    useEffect(() => {
        window.scrollTo(0, 0);

        // Re-init observer for new page content
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, { threshold: 0.1 });

        // Small delay to ensure DOM is ready
        setTimeout(() => {
            const elements = document.querySelectorAll('.animate-on-scroll');
            elements.forEach(el => observer.observe(el));
        }, 100);

        return () => elements.forEach(el => observer.unobserve(el));
    }, [slug]);

    if (!data) {
        return <Navigate to="/" replace />;
    }

    return (
        <div className="service-page">
            {/* Service Hero */}
            <div className="service-hero">
                <div className="service-hero-overlay"></div>
                <div className="container service-hero-content animate-on-scroll">
                    <h1>{data.title}</h1>
                    <p className="breadcrumb">Home / Services / {data.title}</p>
                </div>
            </div>

            {/* Overview Section */}
            <section className="service-overview animate-on-scroll">
                <div className="container">
                    <div className="overview-content">
                        <h2>Overview</h2>
                        <p>{data.description}</p>
                        <p>
                            At Planterrio, we pride ourselves on delivering top-tier {data.title.toLowerCase()} services.
                            Our team of experts ensures that every project is executed with precision, using high-quality materials
                            and innovative designs to bring your vision to life.
                        </p>
                    </div>
                </div>
            </section>

            {/* Gallery Section - Using specific images from data */}
            <section className="service-gallery animate-on-scroll">
                <div className="container">
                    <h2 className="section-title">Gallery</h2>
                    <div className="gallery-grid delay-200">
                        {data.images.map((img, index) => (
                            <div key={index} className="gallery-item">
                                <img src={img} alt={`${data.title} Project ${index + 1}`} />
                                <div className="gallery-overlay">
                                    <span>View</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section - Reused for consistency */}
            <Process />

            {/* Testimonials - Reused for consistency */}
            <Testimonials />

            {/* FAQ - Reused or Optional? User asked for at least gallery/process/testimonials. I'll include FAQ as it adds value. */}
            <FAQ />

        </div>
    );
};

export default ServicePage;
