import React from 'react';
import Title from './Title.jsx';
import './Process.css';

const processSteps = [
    {
        id: '01',
        title: 'Concept & Consultation',
        description: 'We start by listening. Through a detailed site visit and consultation, we understand your lifestyle, preferences, and the unique character of your space.',
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
    },
    {
        id: '02',
        title: 'Design & Planning',
        description: 'Precision meets creativity. We map out your area and craft a bespoke design layout that maximizes every inch of your outdoor potential.',
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h20"></path><path d="M2 17h20"></path><path d="M2 7h20"></path></svg>
    },
    {
        id: '03',
        title: 'Curation & Delivery',
        description: 'We source the finest materials—from exotic plants to premium stones—and ensure they arrive at your doorstep ready for transformation.',
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
    },
    {
        id: '04',
        title: 'Masterful Installation',
        description: 'Our artisans get to work. With meticulous attention to detail, we bring the design to life, ensuring every plant and paver is perfectly placed.',
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
    },
    {
        id: '05',
        title: 'The Reveal',
        description: 'The moment of truth. We walk you through your new sanctuary, ensuring everything is flawless before handing over the keys to your personal paradise.',
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
    }
];

const Process = () => {
    return (
        <section className="process-section animate-on-scroll">
            <div className="container">
                <Title title="Our Process, Post Confirmation!" align="center" />
                <div className="process-container animate-on-scroll delay-200">
                    {processSteps.map((step, index) => (
                        <div key={index} className="process-box">
                            <div className="step-count">{step.id}</div>
                            <h3>{step.title}</h3>
                            <p>{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
