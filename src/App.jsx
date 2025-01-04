import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import RoomsPage from './pages/RoomsPage';
import MenuPage from './pages/MenuPage';
import EntertainmentPage from './pages/EntertainmentPage';
import BookingPage from './pages/BookingPage';
import TestimonialsPage from './pages/TestimonialsPage';
import ContactPage from './pages/ContactPage';
import FeaturedServices from './components/FeaturedServices'

import ScrollToTop from './components/ScrollToTop.jsx';

function App() { 
 window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        {/* <FeaturedServices></FeaturedServices> */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/rooms" element={<RoomsPage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/entertainment" element={<EntertainmentPage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;