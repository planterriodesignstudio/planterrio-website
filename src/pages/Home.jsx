import React, { useEffect } from 'react';
import Hero from '../components/Hero.jsx';
import About from '../components/About.jsx';
import Services from '../components/Services.jsx';
import Trending from '../components/Trending.jsx';
import Gallery from '../components/Gallery.jsx';
import Process from '../components/Process.jsx';
import Testimonials from '../components/Testimonials.jsx';
import FAQ from '../components/FAQ.jsx';
import Articles from '../components/Articles.jsx';
import ServiceBenefits from '../components/ServiceBenefits.jsx';
import WhyChooseUS from '../components/WhyChooseUs.jsx';
import CTASection from '../components/CTASection.jsx';
import SEO from '../components/SEO.jsx';

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
