import React from 'react';
import Title from './Title.jsx';
import './About.css';
import aboutImg from '../assets/images/home/about.webp';

const About = () => {
    return (
        <section id="about" className="about-section animate-on-scroll">
            <div className="container about-container">
                <div className="about-content">
                    <Title title="About Us" align="left" />
                    <p className="about-text">
                        <strong>At Planterrio, we believe every space has a soul waiting to bloom.</strong> <br /><br />
                        We aren't just landscapers; we are expert garden designers in Bangalore who paint with nature. Whether it's a cozy balcony in a high-rise or a sprawling villa lawn, our professional landscapers in Bangalore turn ordinary patches of concrete into breathing sanctuaries. Planterrio is your trusted partner for residential and commercial landscaping in Bangalore.
                        <p><b>Why Choose our Landscaping Services?</b></p>
                        <ul className="about-text-list">
                            {[
                                'Best landscaping company in Bangalore (Price & Quality)',
                                'Customized Terrace Garden Design Bangalore',
                                'Eco-friendly Gardening Practices',
                                'Expert Landscape Maintenance',
                                'Innovative Vertical Garden Designers',
                                'Customer Satisfaction Guaranteed'
                            ].map((item, index) => (
                                <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </p>
                </div>
                <div className="about-image">
                    <img src={aboutImg} alt="About Planterrio" />
                    <div className="img-border"></div>
                </div>
            </div>
        </section>
    );
};

export default About;
