import React from 'react';
import Title from './Title';
import Button from './Button';
import './CTASection.css';

import ctaImg from '../assets/images/home/cta.webp';

const CTASection = () => {
    return (
        <section className="cta-section animate-on-scroll" style={{ backgroundImage: `url(${ctaImg})` }}>
            <div className="cta-overlay"></div>
            <div className="cta-content">
                <Title
                    title="Your Dream Garden is One Call Away"
                    subtitle="Don't let your outdoor space stay ordinary. Partner with Bangalore's leading landscape artists and step into a world of green luxury."
                    align="center"
                    variant="light"
                />
                <Button to="/contact" variant="primary">Book Your Free Consultation</Button>
            </div>
        </section>
    );
};

export default CTASection;
