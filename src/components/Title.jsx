import React from 'react';
import './Title.css';

const Title = ({ title, subtitle, align = 'center', variant = 'default', className = '' }) => {
    return (
        <div className={`aesthetic-title-wrapper ${align} ${variant} ${className}`}>
            <h2 className="aesthetic-main-title">
                {title}
                <span className="title-underline"></span>
            </h2>
            {subtitle && <p className="aesthetic-subtitle">{subtitle}</p>}
        </div>
    );
};

export default Title;
