import React, { useState, useEffect, useRef } from 'react';
import "./AboutDerry.css"; // Corrected import statement

function AboutDerry() {
    const [isVisible, setIsVisible] = useState(false);
    const aboutDerryRef = useRef(null);

    useEffect(() => {
        const observerOptions = {
            root: null, // relative to the document viewport
            rootMargin: '0px', // margin around the root
            threshold: 0.1 // percentage of the target's visibility
        };

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setIsVisible(entry.isIntersecting));
        }, observerOptions);

        observer.observe(aboutDerryRef.current);

        return () => {
            if (aboutDerryRef.current) {
                observer.unobserve(aboutDerryRef.current);
            }
        };
    }, []);

    return (
        <div className="about-derry-container">
        <section className={`about-derry ${isVisible ? 'fade-in' : 'fade-out'}`} ref={aboutDerryRef}>
            <h2>Discover the Enchantment of Derry</h2>
            <p>
                Derry, also known as Londonderry, is a city steeped in history and brimming with culture. 
                From its ancient walls that tell tales of past conflicts to the vibrant and artistic 
                spirit seen in its streets today, Derry offers a unique blend of historical significance 
                and contemporary dynamism. Whether you're exploring the iconic Peace Bridge, marveling at 
                the stunning murals of the Bogside, or immersing yourself in the bustling atmosphere of 
                the Guildhall, Derry is a city that captivates the heart of every visitor. Join us on a 
                journey through time, where each corner of the city reveals a new chapter of Northern 
                Ireland's intriguing story. Our guided tours provide an unparalleled opportunity to 
                experience the essence of Derry, a city that not only echoes the echoes of history but 
                vibrates with a lively present.
            </p>
        </section>
    </div>
    );
}

export default AboutDerry;
