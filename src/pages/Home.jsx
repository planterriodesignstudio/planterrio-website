import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Trending from '../components/Trending';
import Gallery from '../components/Gallery';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Articles from '../components/Articles';
import ServiceBenefits from '../components/ServiceBenefits';
import WhyChooseUS from '../components/WhyChooseUS';
import CTASection from '../components/CTASection';
import SEO from '../components/SEO';

const Home = () => {
    useEffect(() => {
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
    }, []);

    return (
        <>
            <SEO
                title="Home"
                description="Planterrio is Bangalore's leading landscaping studio specializing in terrace gardens, vertical walls, and sustainable outdoor living designs."
                keywords="Landscaping Bangalore, Terrace Gardening, Vertical Gardens, Garden Designers"
            />
            <Hero />
            <About />
            <Services />
            <WhyChooseUS />
            <CTASection />
            <Gallery />
            <Process />
            <Testimonials />
            <ServiceBenefits />
            <FAQ />
            <Articles />
        </>
    );
};

export default Home;
