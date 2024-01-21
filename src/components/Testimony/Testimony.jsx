import React, { useState, useEffect } from 'react';
import './Testimony.css'; // Import global styles

function Testimonial() {
    const testimonials = [
        {
            id: 1,
            text: "Testimonial 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
            author: "Person One"
        },
        {
            id: 2,
            text: "Testimonial 2: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
            author: "Person Two"
        },
        {
            id: 3,
            text: "Testimonial 3: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...",
            author: "Person Three"
        }
        // Add more testimonials as needed
    ];

    const [activeTestimonial, setActiveTestimonial] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTestimonial((prevActiveTestimonial) => 
                (prevActiveTestimonial + 1) % testimonials.length
            );
        }, 5000); // Change slides every 5000ms (5 seconds)

        return () => clearInterval(interval);
    }, [testimonials.length]);

    return (
        <section className="testimonial-section">
            {testimonials.map((testimonial, index) => (
                <div
                    key={testimonial.id}
                    className={`testimonial ${index === activeTestimonial ? 'active' : ''}`}
                >
                    <p className="testimonial-text">{testimonial.text}</p>
                    <p className="testimonial-author">{testimonial.author}</p>
                </div>
            ))}
        </section>
    );
}

export default Testimonial;
