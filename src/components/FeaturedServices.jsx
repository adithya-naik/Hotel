import React from 'react';
import './FeaturedServices.css'; // Import a CSS file for styling if necessary
import { FaUtensils, FaConciergeBell, FaSwimmingPool, FaSpa, FaWifi, FaCar } from 'react-icons/fa';

const FeaturedServices = () => {
    const services = [
        { icon: <FaUtensils />, title: 'Fine Dining', description: 'Experience world-class cuisine crafted by top chefs.' },
        { icon: <FaConciergeBell />, title: '24/7 Concierge', description: 'Always available to cater to your needs.' },
        { icon: <FaSwimmingPool />, title: 'Swimming Pool', description: 'Relax in our state-of-the-art pool facilities.' },
        { icon: <FaSpa />, title: 'Luxury Spa', description: 'Indulge in rejuvenating spa treatments.' },
        { icon: <FaWifi />, title: 'Free WiFi', description: 'Stay connected with high-speed internet.' },
        { icon: <FaCar />, title: 'Valet Parking', description: 'Convenient valet services for your vehicles.' }
    ];

    return (
        <div className="featured-services">
            <h2 className="featured-services-title">Our Featured Services</h2>
            <div className="services-container">
                {services.map((service, index) => (
                    <div key={index} className="service-item">
                        <div className="service-icon">{service.icon}</div>
                        <h3 className="service-title">{service.title}</h3>
                        <p className="service-description">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedServices;