import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

const Button = ({
    children,
    variant = 'primary',
    type = 'button',
    onClick,
    href,
    to,
    className = '',
    ...props
}) => {
    const classes = `aesthetic-btn ${variant} ${className}`;

    // If 'to' is provided, use React Router Link
    if (to) {
        return (
            <Link to={to} className={classes} {...props}>
                {children}
            </Link>
        );
    }

    // If 'href' is provided, use standard anchor tag
    if (href) {
        return (
            <a href={href} className={classes} {...props}>
                {children}
            </a>
        );
    }

    // Otherwise use button element
    return (
        <button type={type} className={classes} onClick={onClick} {...props}>
            {children}
        </button>
    );
};

export default Button;
