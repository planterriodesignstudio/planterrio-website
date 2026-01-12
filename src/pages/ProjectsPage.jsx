import React, { useState, useEffect } from 'react';
import { serviceData } from '../data/services';
import { allCategoryImages } from '../data/allImages';
import CTASection from '../components/CTASection';
import WhyChooseUs from '../components/WhyChooseUs';
import './ProjectsPage.css';
import Testimonials from '../components/Testimonials';
import SEO from '../components/SEO';

const ProjectsPage = () => {
    // "All" + all keys from data
    const categories = ['All', ...Object.keys(serviceData)];
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [displayedImages, setDisplayedImages] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);

        // Re-run intersection observer
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

    useEffect(() => {
        console.log('--- Filtering Projects ---');
        console.log('Category:', selectedCategory);

        let images = [];
        if (selectedCategory === 'All') {
            // Use the specific list of images from the 'all' folder
            images = allCategoryImages;
            console.log('Loaded images from "all" folder:', images.length);
        } else {
            const service = serviceData[selectedCategory];
            if (service) {
                if (service.projectImages) {
                    images = service.projectImages.map(src => ({ src, label: service.title }));
                }
            }
        }

        console.log('Final displayedImages count:', images.length);
        setDisplayedImages(images);
    }, [selectedCategory]);

    const getDisplayName = (key) => {
        if (key === 'All') return 'All';
        return serviceData[key]?.title || key;
    };

    return (
        <div className="projects-page">
            <SEO
                title="Our Projects"
                description="Explore our portfolio of terrace gardens, vertical walls, and landscaping projects in Bangalore. See how Planterrio transforms spaces."
                keywords="Garden Portfolio, Landscape Projects, Terrace Garden Photos, Bangalore Landscaping Work"
                url="/projects"
            />
            <div className="container">
                <div className="projects-header animate-on-scroll">
                    <h1 className="projects-title">Our Projects</h1>
                    <p className="projects-intro">
                        Explore our portfolio of transformed spaces. From lush gardens to structured hardscapes,
                        witness the quality and creativity we bring to every project.
                    </p>
                </div>

                {/* Filters */}
                <div className="category-filters animate-on-scroll">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                            onClick={() => setSelectedCategory(cat)}
                        >
                            {getDisplayName(cat)}
                        </button>
                    ))}
                </div>

                {/* Gallery */}
                <div className="projects-gallery-grid animate-on-scroll">
                    {displayedImages.length > 0 ? (
                        displayedImages.map((img, index) => (
                            <div key={index} className="gallery-card">
                                {img.type === 'video' ? (
                                    <video
                                        src={img.src}
                                        className="gallery-media"
                                        muted
                                        loop
                                        playsInline
                                        controls
                                        loading="lazy"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                ) : (
                                    <img src={img.src} alt={img.label} loading="lazy" />
                                )}
                                <div className="gallery-overlay-text">
                                    <span>{img.label}</span>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '2rem', fontSize: '1.2rem' }}>
                            No projects found for {selectedCategory === 'All' ? 'any category' : 'this category'}.
                        </p>
                    )}
                </div>


            </div>

            <CTASection />

            <WhyChooseUs />
            <Testimonials />
        </div >
    );
};

export default ProjectsPage;
