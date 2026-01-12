import { Link } from 'react-router-dom';
import Title from './Title';
import './Services.css';

import landscapingImg from '../assets/images/home/hero1.webp'; // Using Landscaping image
import fountainImg from '../assets/images/home/fountain.webp';
import pergolaImg from '../assets/images/home/pergola-home.webp';
import grassImg from '../assets/images/home/grass.webp';
import flooringImg from '../assets/images/home/flooring.webp';
import potImg from '../assets/images/home/pot.webp';

const services = [
    {
        title: 'Landscaping',
        description: 'From concept to creation, we craft stunning landscapes that redefine luxury living for homes and businesses.',
        image: landscapingImg,
        link: '/services/soft-scaping'
    },
    {
        title: 'Fountains & Statues',
        description: 'Add a touch of serenity with our bespoke water features and artistic statues that become the soul of your garden.',
        image: fountainImg,
        link: '/services/water-fountain'
    },
    {
        title: 'Pergola & Gazebo',
        description: 'Create the perfect outdoor lounge with our custom-designed pergolas and gazebos, blending shade with style.',
        image: pergolaImg,
        link: '/services/wooden-pergola'
    },
    {
        title: 'Grass',
        description: 'Experience the joy of lush green lawns—whether natural or artificial—that stay vibrant all year round.',
        image: grassImg,
        link: '/services/natural'
    },
    {
        title: 'Floorings',
        description: 'Step onto elegance with our premium outdoor flooring solutions, designed for durability and timeless appeal.',
        image: flooringImg,
        link: '/services/flooring'
    },
    {
        title: 'Pots',
        description: 'Elevate your greenery with our designer collection of pots and planters, perfect for every corner of your home.',
        image: potImg,
        link: '/services/pots'
    }
];

const Services = () => {
    return (
        <section id="services" className="services-section">
            <div className="container">
                <Title title="Our Services" align="center" className="animate-on-scroll" />
                <div className="services-grid animate-on-scroll delay-200">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <div
                                className="service-image-bg"
                                style={{ backgroundImage: `url(${service.image})` }}
                            ></div>
                            <div className="service-content-overlay">
                                <div>
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>
                                </div>
                                <div className="service-action-row">
                                    <Link to={service.link} className="service-arrow-btn" aria-label={`Learn more about ${service.title}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
