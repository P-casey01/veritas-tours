import React from 'react';
import "./Footer.css"; // Make sure this path is correct

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="contact-info">
                    <h3>Contact Us</h3>
                    <p>Email: info@veritastours.com</p>
                    <p>Phone: 123-456-7890</p>
                    <p>Address: 123 Main Street, Derry, Northern Ireland</p>
                </div>

                <div className="social-media">
                    <h3>Follow Us</h3>
                    {/* Replace '#' with your actual social media links */}
                    <a href="#" className="social-link">Facebook</a>
                    <a href="#" className="social-link">Twitter</a>
                    <a href="#" className="social-link">Instagram</a>
                </div>

                <div className="google-map">
                    <h3>Find Us</h3>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d143.03834815012172!2d-7.321012037879745!3d54.997408948108124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485fe182ed87aebf%3A0x97400b4234301f19!2sMagazine%20St%2C%20Londonderry!5e0!3m2!1sen!2suk!4v1705853097451!5m2!1sen!2suk" 
                        width="400" 
                        height="300" 
                        style={{ border: 0 }} 
                        allowFullScreen
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
