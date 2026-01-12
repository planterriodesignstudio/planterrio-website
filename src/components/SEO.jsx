import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, url }) => {
    const siteTitle = 'Planterrio';
    const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
    const defaultDescription = 'Planterrio: Premier landscaping, terrace garden, vertical garden, and outdoor living space designers in Bangalore. Transforming spaces into living masterpieces.';
    const metaDescription = description || defaultDescription;
    const metaKeywords = keywords ? `${keywords}, Planterrio, Landscaping Bangalore` : 'Planterrio, Landscaping Bangalore, Terrace Garden, Vertical Garden, Garden Design';
    const canonicalUrl = url ? `https://planterrio.com${url}` : 'https://planterrio.com';

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={metaDescription} />
            <meta name="keywords" content={metaKeywords} />
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content="https://planterrio.com/og-image.jpg" /> {/* Ideally place a real image URL here */}

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={canonicalUrl} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={metaDescription} />
            <meta property="twitter:image" content="https://planterrio.com/og-image.jpg" />
        </Helmet>
    );
};

export default SEO;
