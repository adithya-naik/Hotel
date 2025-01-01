import React, { useState } from 'react';
import { Search, Star, Clock, DollarSign } from 'lucide-react';

const services = [
  {
    id: 1,
    name: 'Room Service',
    description: 'Enjoy delicious meals in the comfort of your room.',
    price: 10.0,
    imageUrl: 'https://images.pexels.com/photos/6287766/pexels-photo-6287766.jpeg',
    available: '24/7',
    rating: 4.8
  },
  {
    id: 2,
    name: 'Spa',
    description: 'Relax and rejuvenate with our spa services.',
    price: 50.0,
    imageUrl: 'https://images.pexels.com/photos/4058542/pexels-photo-4058542.jpeg',
    available: '9AM - 8PM',
    rating: 4.9
  },
  {
    id: 3,
    name: 'Gym',
    description: 'Stay fit and healthy with our state-of-the-art gym.',
    price: 20.0,
    imageUrl: 'https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg',
    available: '6AM - 10PM',
    rating: 4.7
  },
  {
    id: 4,
    name: 'Swimming Pool',
    description: 'Take a dip in our luxurious swimming pool.',
    price: 15.0,
    imageUrl: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg',
    available: '7AM - 9PM',
    rating: 4.6
  },
  {
    id: 5,
    name: 'Laundry Service',
    description: 'Get your clothes cleaned and pressed quickly.',
    price: 8.0,
    imageUrl: 'https://images.pexels.com/photos/4107297/pexels-photo-4107297.jpeg',
    available: '8AM - 6PM',
    rating: 4.5
  },
  {
    id: 6,
    name: 'Airport Shuttle',
    description: 'Convenient transportation to and from the airport.',
    price: 25.0,
    imageUrl: 'https://images.pexels.com/photos/3860093/pexels-photo-3860093.jpeg',
    available: 'On Request',
    rating: 4.7
  },
  {
    id: 7,
    name: 'Business Center',
    description: 'Access to computers, printers, and meeting rooms.',
    price: 30.0,
    imageUrl: 'https://images.pexels.com/photos/3184308/pexels-photo-3184308.jpeg',
    available: '24/7',
    rating: 4.4
  },
  {
    id: 8,
    name: 'Concierge Service',
    description: 'Personalized assistance with reservations and recommendations.',
    price: 0.0,
    imageUrl: 'https://images.pexels.com/photos/3184307/pexels-photo-3184307.jpeg',
    available: '24/7',
    rating: 4.9
  },
  {
    id: 9,
    name: 'Massage Therapy',
    description: 'Experience relaxation with a professional massage.',
    price: 60.0,
    imageUrl: 'https://images.pexels.com/photos/3822860/pexels-photo-3822860.jpeg',
    available: '10AM - 8PM',
    rating: 4.8
  },
  {
    id: 10,
    name: 'Childcare Services',
    description: 'Safe and fun childcare for your little ones.',
    price: 40.0,
    imageUrl: 'https://images.pexels.com/photos/3662665/pexels-photo-3662665.jpeg',
    available: '9AM - 7PM',
    rating: 4.7
  }
];


const ServiceCard = ({ service }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img
          src={service.imageUrl}
          alt={service.name}
          className="w-full h-48 object-cover"
        />
        {/* <span className="absolute top-4 left-4 text-4xl">{service.icon}</span> */}
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900">{service.name}</h3>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm text-gray-600">{service.rating}</span>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4">{service.description}</p>
        
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {service.available}
          </div>
          <div className="flex items-center font-semibold">
            <DollarSign className="w-4 h-4" />
            {service.price === 0 ? 'Complimentary' : service.price.toFixed(2)}
          </div>
        </div>
        
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
          Book Now
        </button>
      </div>
    </div>
  );
};

const ServicesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = services.filter(service =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">Hotel Services</h1>
        <p className="text-center text-gray-600 mb-8">Experience luxury and comfort with our premium services</p>
        
        <div className="relative mb-8 max-w-md mx-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search services..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;