import React, { useState } from 'react';
import Title from './Title.jsx';
import './FAQ.css';

const faqData = [
    {
        question: 'What landscaping services Planterrio offer in Bangalore?',
        answer: 'We offer a full suite of landscaping services including Terrace Gardens, Vertical Green Walls, Villa Landscaping, and Hardscaping. We transform any space in Bangalore into a green paradise.'
    },
    {
        question: 'Why should I hire a professional landscaping company in Bangalore?',
        answer: 'A professional touch ensures your garden isn\'t just plants—it\'s an ecosystem. We bring design expertise, correct plant selection for Bangalore\'s climate, and long-term maintenance plans.'
    },
    {
        question: 'Do you provide customized garden designs for homes in Bangalore?',
        answer: 'Absolutely. Every project starts with a blank canvas. We tailor designs to your specific taste—be it modern, rustic, or Zen—and optimize for your space\'s sunlight and soil conditions.'
    },
    {
        question: 'What is the cost of landscaping services in Bangalore?',
        answer: 'Costs vary based on scope and materials. However, Planterrio prides itself on offering the best market rates without compromising quality. We provide transparent, itemized quotes after our free site visit.'
    },
    {
        question: 'Do you offer maintenance services for gardens in Bangalore?',
        answer: 'Yes! We not only build but nurture. Our maintenance packages include pruning, fertilizing, and pest control to ensure your garden grows more beautiful with time.'
    },
    {
        question: 'How long does it take to complete a landscaping project in Bangalore?',
        answer: 'We value speed and precision. A typical balcony makeover takes 3-5 days, while extensive villa landscapes may take 2-4 weeks. We always aim to handover on the promised date.'
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq-section animate-on-scroll">
            <div className="container">
                <Title title="Frequently Asked Questions" align="center" />
                <div className="faq-grid animate-on-scroll delay-200">
                    {faqData.map((item, index) => (
                        <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`} onClick={() => toggleAccordion(index)}>
                            <div className="faq-question">
                                <h3>{item.question}</h3>
                                <span className="toggle-icon">{activeIndex === index ? '-' : '+'}</span>
                            </div>
                            <div className="faq-answer">
                                <p>{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
