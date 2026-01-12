import React, { useEffect, useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactPage.css';
import SEO from '../components/SEO.jsx';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        from_name: '',
        phone: '',
        from_email: '',
        service: '',
        message: ''
    });

    const form = useRef();

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'phone') {
            setFormData({ ...formData, [name]: value.replace(/\D/g, '') });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.from_email && !formData.from_email.includes('@')) {
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

        // Send Admin Notification (uses SendForm which grabs from_name, from_email, etc.)
        const sendAdminEmail = emailjs.sendForm(
            serviceId,
            adminTemplateId,
            form.current,
            { publicKey }
        );

        // Send Auto-reply to User (uses Send directly to map 'email' variable correctly)
        const sendAutoReply = emailjs.send(
            serviceId,
            autoReplyTemplateId,
            {
                from_name: formData.from_name,
                from_email: formData.from_email,
                phone: formData.phone,
                service: formData.service,
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

                if (adminResult.status === 'fulfilled' && autoReplyResult.status === 'fulfilled') {
                    alert('Message sent successfully!');
                    setFormData({ from_name: '', phone: '', from_email: '', service: '', message: '' });
                } else if (adminResult.status === 'fulfilled' && autoReplyResult.status === 'rejected') {
                    alert('Message sent! (Note: Auto-reply could not be sent)');
                    console.warn('Auto-reply failed:', autoReplyResult.reason);
                    setFormData({ from_name: '', phone: '', from_email: '', service: '', message: '' });
                } else if (adminResult.status === 'rejected' && autoReplyResult.status === 'fulfilled') {
                    alert('Message verification sent, but Admin notification failed. Please contact us directly.');
                    console.error('Admin email failed:', adminResult.reason);
                } else {
                    alert('Failed to send message. Please try again later.');
                    console.error('Both emails failed:', adminResult.reason, autoReplyResult.reason);
                }
            });
    };

    useEffect(() => {
        window.scrollTo(0, 0);

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

    const serviceOptions = [
        "Select a Service",
        "Landscaping",
        "Soft Scaping",
        "Hard Scaping",
        "Vertical Garden",
        "Pergola (Glass/Wood/Stone)",
        "Gazebo",
        "Water Features",
        "Garden Maintenance",
        "Other"
    ];

    return (
        <div className="contact-page">
            <SEO
                title="Contact Us"
                description="Get in touch with Planterrio for a free consultation. Visit our Bangalore studio or call us to discuss your landscaping needs."
                keywords="Contact Planterrio, Landscaping Consultation, Garden Design Quote, Bangalore Landscape Architect"
                url="/contact"
            />

            {/* Title Section */}
            <div className="container animate-on-scroll">
                <div className="contact-page-title">
                    <h1>Hire Best Landscaping Contractor in Bangalore</h1>
                    <div className="subtitle-divider"></div>
                    <p>Ready to transform your space? Contact the expert residential and commercial landscapers for a free quote.</p>
                    <p>Get the best balcony & terrace garden cost in Bangalore today.</p>
                </div>
            </div>

            <div className="container contact-split-layout">

                {/* Left Side: Wrapper with Overlay Content */}
                <div className="contact-left-col animate-on-scroll">
                    <div className="left-col-content">

                        <div className="info-block">
                            <div className="info-block-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            </div>
                            <div className="info-block-content">
                                <h4>Visit Us</h4>
                                <p>3rd Main Floor Chinappanahalli, <br />, Bangalore India 560037</p>
                            </div>
                        </div>

                        <div className="info-block">
                            <div className="info-block-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                            </div>
                            <div className="info-block-content">
                                <h4>Chat with us</h4>
                                <a href="mailto:planterriodesignstudio@gmail.com">planterriodesignstudio@gmail.com</a>
                            </div>
                        </div>

                        <div className="info-block">
                            <div className="info-block-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.05 12.05 0 0 0 .57 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.03 12.03 0 0 0 2.81.57A2 2 0 0 1 22 16.92z"></path></svg>
                            </div>
                            <div className="info-block-content">
                                <h4>Call us</h4>
                                <a href="tel:+919324120426">+91 93241 20426</a>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div className="social-media-block">
                            <h4>Follow Us</h4>
                            <div className="social-icons-row">

                                <a href="https://www.instagram.com/planterrio_design_studio?igsh=Z2FiNWFkYXZyeHVy" className="social-icon" aria-label="Instagram">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="contact-right-col animate-on-scroll delay-200">
                    <h2>Send a Message</h2>
                    <form ref={form} onSubmit={handleSubmit} className="form-full-height">
                        <div className="form-row">
                            <div className="form-group-half">
                                <label htmlFor="name">Name *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="from_name"
                                    className="form-input"
                                    placeholder="Your Name"
                                    value={formData.from_name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group-half">
                                <label htmlFor="phone">Contact No. *</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    className="form-input"
                                    placeholder="+91 99999 99999"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    pattern="[0-9]*"
                                    title="Please enter only numbers"
                                />
                            </div>
                        </div>

                        <div className="form-group-full">
                            <label htmlFor="email">Email Address *</label>
                            <input
                                type="email"
                                id="email"
                                name="from_email"
                                className="form-input"
                                placeholder="you@example.com"
                                value={formData.from_email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group-full">
                            <label htmlFor="service">Interested Service</label>
                            <select
                                id="service"
                                name="service"
                                className="form-select"
                                value={formData.service}
                                onChange={handleChange}
                            >
                                {serviceOptions.map((opt, idx) => (
                                    <option key={idx} value={opt === "Select a Service" ? "" : opt} disabled={opt === "Select a Service"}>
                                        {opt}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="form-group-full" style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                            <label htmlFor="message">Comments / Questions</label>
                            <textarea
                                id="message"
                                name="message"
                                className="form-textarea"
                                placeholder="Tell us more about your project..."
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <button type="submit" className="submit-btn">Submit Request</button>
                    </form>
                </div>

            </div>

            {/* Google Map (Padded Section) */}
            <div className="container animate-on-scroll">
                <div className="map-section-padded">
                    <iframe
                        className="map-container-frame"
                        title="Office Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0880929598256!2d77.7045359235889!3d12.96621461499933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae122ec4e9e5db%3A0x221d95939c25731!2sChinnappanahalli%20Lake!5e0!3m2!1sen!2sin!4v1766939281974!5m2!1sen!2sin"
                        frameBorder="0"
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>

        </div>
    );
};

export default ContactPage;
