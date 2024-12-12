import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/rooms', label: 'Rooms' },
    { to: '/menu', label: 'Menu' },
    { to: '/services', label: 'Services' },
    { to: '/entertainment', label: 'Entertainment' },
    { to: '/booking', label: 'Booking' },
    { to: '/contact', label: 'Contact' }
  ];

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold flex items-center">
          <svg className="w-8 h-8 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.5A1 1 0 009 15.5V11a1 1 0 112 0v4.5a1 1 0 00.757.97l5 1.5a1 1 0 001.169-1.409l-7-14z" clipRule="evenodd" />
          </svg>
          Hotel & Restaurant
        </Link>
        
        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
        
        {/* Navigation Links */}
        <div className={`
          ${isOpen ? 'block' : 'hidden'} 
          md:flex md:space-x-6 absolute md:relative 
          top-16 md:top-0 left-0 md:left-auto 
          w-full md:w-auto bg-blue-700 md:bg-transparent 
          p-4 md:p-0 z-50
        `}>
          {navLinks.map((link) => (
            <Link 
              key={link.to}
              to={link.to} 
              className="block md:inline-block hover:text-yellow-300 transition py-2 md:py-0"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;