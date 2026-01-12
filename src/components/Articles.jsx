import React from 'react';
import Title from './Title';
import Button from './Button';
import './Articles.css';

import blog1 from '../assets/images/home/blog1.webp';
import blog2 from '../assets/images/home/blog2.webp';
import blog3 from '../assets/images/home/blog3.webp';

const articles = [
    {
        title: '5 Tips for a Low-Maintenance Terrace Garden',
        excerpt: 'Discover how to create a lush terrace garden that requires minimal effort and stays green all year round.',
        date: 'October 15, 2025',
        image: blog1
    },
    {
        title: 'Benefits of Vertical Gardens in Urban Homes',
        excerpt: 'Maximize your space and improve air quality with a stunning vertical garden. Here is why you need one.',
        date: 'September 28, 2025',
        image: blog2
    },
    {
        title: 'Choosing the Right Plants for Your Balcony',
        excerpt: 'Not all plants thrive on balconies. Learn which species are best suited for potted environments and varied sunlight.',
        date: 'September 10, 2025',
        image: blog3
    }
];

const Articles = () => {
    return (
        <section className="articles-section animate-on-scroll">
            <div className="container">
                <Title title="Latest from our Blog" align="center" />
                <div className="articles-grid animate-on-scroll delay-200">
                    {articles.map((article, index) => (
                        <div key={index} className="article-card">
                            <div className="article-image">
                                <img src={article.image} alt={article.title} />
                            </div>
                            <div className="article-content">
                                <span className="article-date">{article.date}</span>
                                <h3>{article.title}</h3>
                                <p>{article.excerpt}</p>
                                <Button href="#" variant="outline" style={{ padding: '8px 20px', fontSize: '0.9rem' }}>Read More</Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Articles;
