import React, { useState, useEffect, useRef } from "react";
import "./AboutUs.css";
import Aboutus1 from '../../Images/AboutUs1.jpeg';
import Aboutus2 from '../../Images/AboutUs2.jpeg';

function AboutUs() {
    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const aboutRef1 = useRef(null);
    const aboutRef2 = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.target === aboutRef1.current) {
                        setIsVisible1(entry.isIntersecting);
                    } else if (entry.target === aboutRef2.current) {
                        setIsVisible2(entry.isIntersecting);
                    }
                });
            },
            {
                root: null, // Default is the viewport
                rootMargin: '0px',
                threshold: 0.1 // Adjust this value as needed
            }
        );

        if (aboutRef1.current) {
            observer.observe(aboutRef1.current);
        }
        if (aboutRef2.current) {
            observer.observe(aboutRef2.current);
        }

        return () => {
            if (aboutRef1.current) {
                observer.unobserve(aboutRef1.current);
            }
            if (aboutRef2.current) {
                observer.unobserve(aboutRef2.current);
            }
        };
    }, []);

    return (
        <section className="about-us">
            <div className={`about-section ${isVisible1 ? 'fade-in' : 'fade-out'}`} ref={aboutRef1}>
                <div className="about-image-container">
                    <img src={Aboutus1} alt="First Image" />
                </div>
                <div className="about-text-container">
                    <div className="about-text">
                        <h1>About Us</h1>
                        <p>Welcome to a journey where every step tells a story, and every corner holds a new adventure. At Veritas Tours, we're not just tour guides; we're storytellers, history enthusiasts, and your personal gateway to experiencing the hidden gems and captivating tales of our beautiful region.Our tours are more than mere sightseeing. They are immersive experiences that transport you through time and culture. With us, you'll tread paths less traveled, uncover local secrets, and engage with history and nature in ways you never imagined possible. Our expert guides are not only knowledgeable but also passionate about sharing their love for the locale. They bring the past to life, share intriguing anecdotes, and offer a deeper understanding that goes beyond guidebooks.</p>
                    </div>
                </div>
            </div>

            <div className={`about-section reverse ${isVisible2 ? 'fade-in' : 'fade-out'}`} ref={aboutRef2}>
                <div className="about-image-container">
                    <img src={Aboutus2} alt="Second Image" />
                </div>
                <div className="about-text-container">
                    <div className="about-text">
                        <h1>Why Us?</h1>
                        <p>Whether you're a history buff, a nature lover, or a culture seeker, we have something for everyone. Our tours are thoughtfully curated to ensure an enriching, enjoyable, and unforgettable experience. From the cobbled streets echoing the tales of old to the breathtaking views that only locals know of, we bring you an authentic experience that will leave you with memories to cherish.

Why book with us? Because with Veritas Tours, you don’t just visit a place; you live it. Come, be part of our story.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;
