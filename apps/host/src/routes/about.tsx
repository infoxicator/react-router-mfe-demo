import React from 'react';
const About = React.lazy(() => import('about/Module'));

export default function AboutPage() {    
    return (
        <React.Suspense fallback="Loading About">
            <About />
        </React.Suspense>
    );
}