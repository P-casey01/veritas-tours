import React from 'react';
import './Header.css';
import logo from '../../Images/Logo.png';

function Header() {
    return (
        <header className="header">
            <div className="logo-and-text">
                <div className="logo-container">
                    <img src={logo} alt="Veritas Tours Logo" className="logo" />
                </div>
                <div className="header-text">
                    "If These Stones Could Talk"
                </div>
            </div>
            <nav>
                <a href="#about-derry">About Derry</a>
                <a href="#about-us">About Us</a>
                <a href="#testimonials">Testimonials</a>
                <a href="#tours">Tours</a>
                <a href="#Footer">Contact Us</a>
            </nav>
        </header>
    );
}

export default Header;
