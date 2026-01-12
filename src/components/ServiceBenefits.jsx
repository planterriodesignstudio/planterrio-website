import React from 'react';
import Title from './Title.jsx';
import './ServiceBenefits.css';

const ServiceBenefits = ({ title, intro, benefitsList }) => {
    // Duplicate for smooth marquee loop
    const marqueeList = [...(benefitsList || []), ...(benefitsList || [])];

    if (!benefitsList || benefitsList.length === 0) return null;

    return (
        <div className="service-benefits-section animate-on-scroll">
            <div className="container">
                <Title title={`Benefits of ${title}`} subtitle={intro} align="center" />
            </div>

            <div className="marquee-container">
                <div className="marquee-content">
                    {marqueeList.map((benefit, index) => (
                        <span key={index} className="benefit-pill">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px', verticalAlign: 'text-bottom' }}><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg>
                            {benefit}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceBenefits;
