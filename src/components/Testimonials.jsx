import React, { useState, useEffect } from 'react';
import Title from './Title.jsx';
import './Testimonials.css';

const testimonials = [
    {
        name: 'Suresh Menon',
        role: 'Villa Owner, Whitefield',
        text: 'I didn’t just get a garden; I got a sanctuary. Planterrio’s pergola design completely redefined our outdoor evenings. It’s pure luxury right at home.'
    },
    {
        name: 'Priya Sharma',
        role: 'Homeowner, Indiranagar',
        text: 'I never imagined my balcony could look this spacious! The vertical garden is a masterpiece—it feels like a slice of the rainforest in the middle of the city.'
    },
    {
        name: 'Anjali R.',
        role: 'Koramangala',
        text: 'Finding a team that understands "sustainable luxury" is hard. Planterrio delivered beyond promise. Professional, artistic, and incredibly detailed.'
    },
    {
        name: 'Rahul K.',
        role: 'Startup Founder',
        text: 'Our office terrace is now the team’s creative hub. Startups need stress-busting zones, and this green retreat is exactly that. Brilliant execution!'
    },
    {
        name: 'Meera Deshmukh',
        role: 'Architect',
        text: 'As an architect, I’m critical of finishes. Planterrio’s hardscaping and stone work are flawless. They are now my go-to partners for landscape design.'
    },
    {
        name: 'David John',
        role: 'Resident, Hebbal',
        text: 'They automated everything! My garden thrives even when I travel. The irrigation system is a lifesaver. Smart landscaping at its best.'
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(3);

    // Update visible count based on screen size
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setVisibleCount(1);
            } else {
                setVisibleCount(3);
            }
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Auto-slide effect
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 4000); // 4 seconds per slide
        return () => clearInterval(interval);
    }, [currentIndex, visibleCount]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex >= testimonials.length - visibleCount) {
                return 0;
            }
            return prevIndex + 1;
        });
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex === 0) {
                return testimonials.length - visibleCount;
            }
            return prevIndex - 1;
        });
    };

    return (
        <section id="testimonials" className="reviews-section animate-on-scroll">
            <div className="container">
                <Title title="Stories of Transformation" align="center" />

                <div className="slider-container animate-on-scroll delay-200">
                    <button className="slider-btn prev" onClick={prevSlide} aria-label="Previous">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                    </button>

                    <div className="slider-wrapper">
                        <div
                            className="slider-track"
                            style={{
                                transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`
                            }}
                        >
                            {testimonials.map((review, index) => (
                                <div
                                    key={index}
                                    className="slide-item"
                                    style={{ flex: `0 0 ${100 / visibleCount}%` }}
                                >
                                    <div className="review-card">
                                        <div className="quote-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#4CAF50', opacity: 0.2 }}><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 7.55228 14.017 7V3H19.017C20.6739 3 22.017 4.34315 22.017 6V15C22.017 16.6569 20.6739 18 19.017 18H17.017V21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 7.55228 5.0166 7V3H10.0166C11.6735 3 13.0166 4.34315 13.0166 6V15C13.0166 16.6569 11.6735 18 10.0166 18H8.0166V21H5.0166Z"></path></svg>
                                        </div>
                                        <p className="review-text">{review.text}</p>
                                        <div className="review-author">
                                            <h4>{review.name}</h4>
                                            <span>{review.role}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button className="slider-btn next" onClick={nextSlide} aria-label="Next">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    </button>
                </div>

                <div className="slider-dots">
                    {Array.from({ length: testimonials.length - visibleCount + 1 }).map((_, idx) => (
                        <span
                            key={idx}
                            className={`dot ${currentIndex === idx ? 'active' : ''}`}
                            onClick={() => setCurrentIndex(idx)}
                        ></span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
