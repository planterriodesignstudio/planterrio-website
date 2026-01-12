import React, { useState, useEffect } from 'react';
import Button from './Button.jsx';
import emailjs from '@emailjs/browser';
import './Hero.css';

import hero1 from '../assets/images/home/hero1.webp';
import hero2 from '../assets/images/home/hero2.webp';
import hero3 from '../assets/images/home/hero3.webp';
import hero4 from '../assets/images/home/hero4.webp';

const heroImages = [hero1, hero2, hero3, hero4];

const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [formData, setFormData] = useState({
        from_name: '',
        phone: '',
        from_email: '',
        message: ''
    });

    const form = React.useRef();

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
        }, 6000); // 6 seconds for the zoom effect to complete nicely
        return () => clearInterval(interval);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Mobile validation: only numbers
        if (name === 'phone') {
            const numericValue = value.replace(/\D/g, ''); // Remove non-digits
            setFormData({ ...formData, [name]: numericValue });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Email validation is handled by type="email" in the input
        if (!formData.from_email.includes('@')) {
            alert('Please enter a valid email address.');
            return;
        }

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const adminTemplateId = import.meta.env.VITE_EMAILJS_ADMIN_TEMPLATE_ID;
        const autoReplyTemplateId = import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        // Check if environment variables are loaded
        if (!serviceId || !adminTemplateId || !autoReplyTemplateId || !publicKey) {
            alert('Configuration Error: Missing EmailJS environment variables. Please check your .env file and restart the server.');
            console.error('Missing Env Vars:', { serviceId, adminTemplateId, autoReplyTemplateId, publicKey });
            return;
        }

        // Send Admin Notification
        const sendAdminEmail = emailjs.sendForm(
            serviceId,
            adminTemplateId,
            form.current,
            { publicKey }
        );

        // Send Auto-reply to User
        const sendAutoReply = emailjs.send(
            serviceId,
            autoReplyTemplateId,
            {
                from_name: formData.from_name,
                from_email: formData.from_email,
                phone: formData.phone,
                message: formData.message,
                to_email: formData.from_email, // Explicit variable for "To" field
                email: formData.from_email
            },
            { publicKey }
        );

        Promise.allSettled([sendAdminEmail, sendAutoReply])
            .then((results) => {
                const adminResult = results[0];
                const autoReplyResult = results[1];

                if (adminResult.status === 'fulfilled' && adminResult.status === 'fulfilled') {
                    alert('Message sent successfully!');
                    setFormData({ from_name: '', phone: '', from_email: '', message: '' });
                } else if (adminResult.status === 'fulfilled' && autoReplyResult.status === 'rejected') {
                    alert('Message sent! (Note: Auto-reply could not be sent)');
                    console.warn('Auto-reply failed:', autoReplyResult.reason);
                    setFormData({ from_name: '', phone: '', from_email: '', message: '' });
                } else if (adminResult.status === 'rejected') {
                    // If Admin email fails, we consider it a failure for the user's purpose
                    alert('Failed to send message to Admin. Please try again later.');
                    console.error('Admin email failed:', adminResult.reason);
                }
            });
    };

    return (
        <section id="home" className="hero">
            {/* Background Slider */}
            {heroImages.map((img, index) => (
                <div
                    key={index}
                    className={`hero-bg ${index === currentImageIndex ? 'active' : ''}`}
                    style={{ backgroundImage: `url(${img})` }}
                ></div>
            ))}

            <div className="hero-overlay"></div>

            <div className="container hero-container">
                {/* Left Column: Content */}
                <div className="hero-text-content">
                    <h1 className="hero-title">
                        Best Landscaping Company in Bangalore for
                        <span>Terrace & Vertical Gardens</span>
                    </h1>
                    <p className="hero-desc">
                        Experience the perfect blend of nature and luxury. Planterrio is Bangalore’s premier landscaping services provider, dedicated to crafting bespoke terrace gardens, vertical walls, and outdoor sanctuaries tailored just for you.
                    </p>
                    <Button href="tel:+919324120426" variant="primary" className="hero-cta-btn-override" aria-label="Call Us Now">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.05 12.05 0 0 0 .57 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.03 12.03 0 0 0 2.81.57A2 2 0 0 1 22 16.92z"></path></svg>
                        <span>Get a Free Consultation</span>
                    </Button>
                </div>

                {/* Right Column: Form */}
                <div className="hero-form-wrapper">
                    <h3>Get a Free Quote</h3>
                    <p>Fill out the form and we'll get back to you within 24 hours.</p>
                    <form ref={form} onSubmit={handleSubmit}>
                        <div className="hero-form-group">
                            <input
                                type="text"
                                name="from_name"
                                placeholder="Your Name"
                                className="hero-input"
                                required
                                value={formData.from_name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="hero-form-group">
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                className="hero-input"
                                required
                                value={formData.phone}
                                onChange={handleChange}
                                pattern="[0-9]*"
                                title="Please enter only numbers"
                            />
                        </div>
                        <div className="hero-form-group">
                            <input
                                type="email"
                                name="from_email"
                                placeholder="Email Address"
                                className="hero-input"
                                required
                                value={formData.from_email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="hero-form-group">
                            <textarea
                                name="message"
                                placeholder="Required Service / Message"
                                className="hero-input"
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <button type="submit" className="hero-submit-btn">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Hero;
