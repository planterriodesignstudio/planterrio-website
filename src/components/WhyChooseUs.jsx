import React from 'react';
import Title from './Title';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
    const reasons = [
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>,
            title: 'Unmatched Craftsmanship',
            desc: 'With over a decade of mastery, we blend horticultural science with architectural art to create landscapes that thrive and inspire.'
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>,
            title: 'Curated Excellence',
            desc: 'From hand-picked exotic plants to weather-resistant trellis, we refuse to compromise. Your garden deserves nothing but the finest materials.'
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>,
            title: 'Designed Around You',
            desc: 'Your home is unique, and your garden should be too. We co-create with you, ensuring every leaf and stone reflects your personal style.'
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>,
            title: 'Seamless Execution',
            desc: 'We value your time as much as you do. Our disciplined team ensures a hassle-free transformation, delivered right on schedule.'
        }
    ];

    return (
        <section className="why-choose-us animate-on-scroll">
            <div className="container">
                <Title title="Why Choose Planterrio" align="center" />
                <div className="wcu-grid">
                    {reasons.map((item, index) => (
                        <div key={index} className={`wcu-card delay-${(index + 1) * 100}`}>
                            <div className="wcu-icon-wrapper">
                                {item.icon}
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
