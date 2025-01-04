import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Clock, 
  CalendarClock, 
  MapPin, 
  Phone,
  Mail,
  Globe
} from 'lucide-react';
import FeaturedServices from '../components/FeaturedServices';

function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Business Traveler",
      text: "Exceptional service and luxurious accommodations. Will definitely return!",
      rating: 5,
      image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg"
    },
    {
      name: "Michael Chen",
      role: "Food Critic",
      text: "The restaurant's culinary experience is unmatched in the region.",
      rating: 5,
      image: "https://images.pexels.com/photos/3182835/pexels-photo-3182835.jpeg"
    },
    {
      name: "Emily Watson",
      role: "Vacation Guest",
      text: "Perfect blend of comfort and luxury. The staff went above and beyond.",
      rating: 5,
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="relative h-screen bg-cover bg-center" 
           style={{ backgroundImage: 'url("https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg")' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Luxury Redefined
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl">
            Experience world-class hospitality in the heart of the city
          </p>
          <div className="space-x-6">
            <Link to="/booking" 
                  className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg text-lg font-semibold transition">
              Book Your Stay
            </Link>
            <Link to="/contact" 
                  className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-lg text-lg font-semibold transition">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <FeaturedServices />

      {/* Quick Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4 p-6 bg-gray-50 rounded-lg">
              <Clock className="w-8 h-8 text-blue-600" />
              <div>
                <h3 className="font-semibold text-lg">Check-in/Check-out</h3>
                <p className="text-gray-600">From 14:00 / Until 12:00</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 p-6 bg-gray-50 rounded-lg">
              <CalendarClock className="w-8 h-8 text-blue-600" />
              <div>
                <h3 className="font-semibold text-lg">Early Check-in</h3>
                <p className="text-gray-600">Subject to availability</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 p-6 bg-gray-50 rounded-lg">
              <MapPin className="w-8 h-8 text-blue-600" />
              <div>
                <h3 className="font-semibold text-lg">Prime Location</h3>
                <p className="text-gray-600">Central Business District</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Room Showcase */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Luxurious Accommodations</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-96 rounded-xl overflow-hidden group">
              <img src="https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg" 
                   alt="Presidential Suite" 
                   className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                <div className="absolute bottom-0 p-6">
                  <h3 className="text-2xl font-semibold mb-2">Presidential Suite</h3>
                  <p>Ultimate luxury with panoramic city views</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              {[
                { title: "Deluxe Room", image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg" },
                { title: "Executive Suite", image: "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg" },
                { title: "Ocean View", image: "https://images.pexels.com/photos/2869215/pexels-photo-2869215.jpeg" },
                { title: "Family Suite", image: "https://images.pexels.com/photos/3209045/pexels-photo-3209045.jpeg" }
              ].map((room, index) => (
                <div key={index} className="relative h-44 rounded-xl overflow-hidden group">
                  <img src={room.image} 
                       alt={room.title} 
                       loading="lazy"
                       className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                    <div className="absolute bottom-0 p-4">
                      <h3 className="text-xl font-semibold">{room.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='text-center my-auto mt-4 mb-0'>
          <Link to="/rooms" 
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg text-lg font-semibold inline-block transition">
            Explore Rooms
          </Link>
        </div>
      </section>

      {/* Awards & Recognition Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Awards & Recognition</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">2024</div>
              <p className="text-gray-700">Best Luxury Hotel</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">5★</div>
              <p className="text-gray-700">Forbes Rating</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">#1</div>
              <p className="text-gray-700">In Customer Service</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">9.8</div>
              <p className="text-gray-700">Guest Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Guest Experiences</h2>
          <div className="relative">
            <div className="flex transition-transform duration-400 ease-in-out"
                 style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-full px-4">
                  <div className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-xl shadow-lg">
                    <div className="flex items-center space-x-4 mb-6">
                      <img src={testimonial.image} 
                           alt={testimonial.name} 
                           className="w-16 h-16 rounded-full object-cover" />
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-600 italic">{testimonial.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button key={index}
                        className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                          currentTestimonial === index ? 'bg-blue-600' : 'bg-gray-300'
                        }`}
                        onClick={() => setCurrentTestimonial(index)} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-blue-600" />
              <div>
                <h3 className="font-semibold">Call Us</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-blue-600" />
              <div>
                <h3 className="font-semibold">Email Us</h3>
                <p className="text-gray-600">info@luxuryhotel.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Globe className="w-6 h-6 text-blue-600" />
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-gray-600">123 Luxury Ave, City</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="relative py-20 bg-cover bg-center" 
               style={{ backgroundImage: 'url("https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg")' }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-8">Start Your Luxury Experience Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Special offers available for extended stays and early bookings
          </p>
          <Link to="/booking" 
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg text-lg font-semibold inline-block transition">
            Book Now and Save 20%
          </Link>
        </div>
      </section>
    </div>
  );
}

export default HomePage;