import React from 'react';
import Title from './Title';
import './Trending.css';

const categories = [
    { name: 'FRP Planters', link: '#' },
    { name: 'Stone Planters', link: '#' },
    { name: 'Vertical Gardens', link: '#' },
    { name: 'Ceramic Pots', link: '#' },
    { name: 'Metal Stands', link: '#' },
    { name: 'Garden Decor', link: '#' }
];

const Trending = () => {
    return (
        <section className="trending-section animate-on-scroll">
            <div className="container">
                <Title title="Trending Categories!" align="center" />
                <div className="trending-grid animate-on-scroll delay-200">
                    {categories.map((cat, index) => (
                        <a key={index} href={cat.link} className="trending-card">
                            <span>{cat.name}</span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Trending;
