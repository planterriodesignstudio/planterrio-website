import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '../assets/images/home/logo.webp';
import './Header.css';

const navItems = [
    {
        title: 'Landscaping',
        dropdown: ['Soft scaping', 'Hard scaping']
    },
    {
        title: 'Pergolas',
        dropdown: ['Glass pergola', 'Wooden pergola', 'Shrinklers', 'Gazebo', 'Stone pergola']
    },
    {
        title: 'Grass',
        dropdown: ['Natural', 'Artificial']
    },
    {
        title: 'Fountains and statues',
        dropdown: ['Water Fountain', 'Customised Civil Fountain', 'Statues']
    },
    {
        title: 'Other services',
        dropdown: ['Civil works', 'Electrical works', 'Flooring', 'Pots', 'Furnitures']
    },
    {
        title: 'Projects',
        link: '/projects'
    },
    {
        title: 'Contact Us',
        link: '/contact'
    }
];

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle hash scrolling if navigating from another page
    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else if (location.pathname === '/') {
            window.scrollTo(0, 0);
        }
    }, [location]);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
        setActiveDropdown(null);
    };

    const toggleDropdown = (index) => {
        if (activeDropdown === index) {
            setActiveDropdown(null);
        } else {
            setActiveDropdown(index);
        }
    };

    const getSlug = (text) => text.toLowerCase().replace(/\s+/g, '-');

    const isOpaquePage = location.pathname === '/contact' || location.pathname.includes('/services/') || location.pathname === '/projects';

    return (
        <header className={`header ${scrolled || isOpaquePage ? 'scrolled' : ''}`}>
            <div className="top-bar">
                <div className="container top-bar-content">
                    <div className="contact-info">
                        <a href="tel:+919324120426">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.05 12.05 0 0 0 .57 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.03 12.03 0 0 0 2.81.57A2 2 0 0 1 22 16.92z"></path></svg>
                            +91 93241 20426
                        </a>
                        <span className="separator">|</span>
                        <a href="mailto:planterriodesignstudio@gmail.com">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                            planterriodesignstudio@gmail.com
                        </a>
                    </div>
                </div>
            </div>
            <div className="main-nav-wrapper">
                <div className="container header-container">
                    <div className="logo">
                        <Link to="/">
                            <img src={logoImg} alt="Planterrio Logo" className="logo-icon" />
                        </Link>

                    </div>

                    <button className="mobile-toggle" onClick={toggleMobileMenu} aria-label="Toggle Menu">
                        <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
                        <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
                        <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
                    </button>

                    <nav className={`desktop-nav ${mobileMenuOpen ? 'mobile-active' : ''}`}>
                        <ul>
                            {navItems.map((item, index) => (
                                <li key={index}
                                    className={`nav-item ${item.dropdown ? 'has-dropdown' : ''} ${activeDropdown === index ? 'active' : ''}`}
                                    onMouseEnter={() => { if (window.innerWidth > 992 && item.dropdown) setActiveDropdown(index) }}
                                    onMouseLeave={() => { if (window.innerWidth > 992 && item.dropdown) setActiveDropdown(null) }}
                                >
                                    <div className="nav-link-wrapper" onClick={() => { if (window.innerWidth <= 992 && item.dropdown) toggleDropdown(index) }}>
                                        {item.dropdown ? (
                                            <span
                                                className="dropdown-trigger"
                                                onClick={(e) => {
                                                    if (window.innerWidth > 992) e.preventDefault();
                                                }}
                                            >
                                                {item.title}
                                                <svg className="dropdown-arrow" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
                                            </span>
                                        ) : (
                                            // Regular link (projects/contact)
                                            item.isHash ? (
                                                <a href={item.link} onClick={() => setMobileMenuOpen(false)}>
                                                    {item.title}
                                                </a>
                                            ) : (
                                                <Link to={item.link} onClick={() => setMobileMenuOpen(false)}>
                                                    {item.title}
                                                </Link>
                                            )
                                        )}
                                    </div>

                                    {item.dropdown && (
                                        <ul className={`dropdown-menu ${activeDropdown === index ? 'show' : ''}`}>
                                            {item.dropdown.map((subItem, subIndex) => (
                                                <li key={subIndex}>
                                                    <Link
                                                        to={`/services/${getSlug(subItem)}`}
                                                        onClick={() => {
                                                            setMobileMenuOpen(false);
                                                        }}
                                                    >
                                                        {subItem}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
