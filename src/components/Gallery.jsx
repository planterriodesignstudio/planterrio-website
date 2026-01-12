import React from 'react';
import Title from './Title.jsx';
import Button from './Button.jsx';
import { Link } from 'react-router-dom';
import './Gallery.css';

import project1 from '../assets/images/home/project1.webp';
import project2 from '../assets/images/home/project2.webp';
import project3 from '../assets/images/home/project3.webp';
import project4 from '../assets/images/home/project4.webp';
import project5 from '../assets/images/home/project5.webp';
import project6 from '../assets/images/home/project6.webp';

const projects = [project1, project2, project3, project4, project5, project6];

const Gallery = () => {
    return (
        <section id="projects" className="gallery-section animate-on-scroll">
            <div className="container">
                <Title title="Our Projects!" align="center" />
                <div className="gallery-grid animate-on-scroll delay-200">
                    {projects.map((img, index) => (
                        <div key={index} className="gallery-item">
                            <img src={img} alt={`Project ${index + 1}`} />
                            <Link to="/projects" className="gallery-overlay">
                                <span>View Project</span>
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="gallery-footer">
                    <Button to="/projects" variant="outline">View All Projects</Button>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
