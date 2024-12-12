import React from 'react';
import './HeroSection.css'; // Import a CSS file for styling if necessary

const HeroSection = () => {
    return (
        <div className="hero-section">
            <div className="hero-image-container">
                <img src="restaurant-and-rooms.jpg" alt="Restaurant and Rooms" className="hero-image" />
            </div>
            <div className="hero-text-container">
                <h1 className="hero-text-highlighted">Experience the Best of Hospitality</h1>
                <p className="hero-text">Discover our luxurious rooms and savor the flavors of our exquisite restaurant</p>
            </div>
        </div>
    );
};

export default HeroSection;

