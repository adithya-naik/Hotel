import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'; // Importing icons

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto grid md:grid-cols-4 gap-8 px-4">
        <div>
          <h3 className="text-xl font-bold mb-4">Hotel & Restaurant</h3>
          <p className="text-gray-400">Exceptional hospitality and dining experience</p>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-blue-300">Home</Link></li>
            <li><Link to="/rooms" className="hover:text-blue-300">Rooms</Link></li>
            <li><Link to="/menu" className="hover:text-blue-300">Menu</Link></li>
            <li><Link to="/booking" className="hover:text-blue-300">Booking</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4">Contact Info</h4>
          <ul className="space-y-2">
            <li>123 Hotel Street</li>
            <li>City, Country</li>
            <li>Phone: +1 (555) 123-4567</li>
            <li>Email: info@hotelrestaurant.com</li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-300">
              <FaFacebookF size={24} />
            </a>
            <a href="#" className="hover:text-blue-300">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="hover:text-blue-300">
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="text-center mt-8 border-t border-gray-700 pt-4">
        <p>&copy; 2024 Hotel & Restaurant. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
