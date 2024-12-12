import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="relative h-[600px] bg-cover bg-center" style={{
        backgroundImage: 'url("/api/placeholder/1600/900")'
      }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Our Hotel & Restaurant
          </h1>
          <p className="text-xl mb-8 max-w-2xl">
            Experience luxury, comfort, and exceptional dining in one destination
          </p>
          <div className="space-x-4">
            <Link 
              to="/booking" 
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-lg transition"
            >
              Book Now
            </Link>
            <Link 
              to="/services" 
              className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-6 py-3 rounded-lg transition"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Services */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Featured Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <svg className="w-16 h-16 mx-auto mb-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <h3 className="text-xl font-semibold mb-2">Comfortable Rooms</h3>
            <p>Luxurious and well-appointed rooms for a perfect stay</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <svg className="w-16 h-16 mx-auto mb-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-semibold mb-2">24/7 Service</h3>
            <p>Round-the-clock assistance to meet all your needs</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <svg className="w-16 h-16 mx-auto mb-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
            <h3 className="text-xl font-semibold mb-2">Premium Dining</h3>
            <p>Exquisite cuisine from our world-class restaurant</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;