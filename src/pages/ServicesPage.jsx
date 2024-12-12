import React from 'react';
import ServiceCard from '../components/ServiceCard';
const services = [
  {
    id: 1,
    name: 'Room Service',
    description: 'Enjoy delicious meals in the comfort of your room.',
    price: 10.0,
  },
  {
    id: 2,
    name: 'Spa',
    description: 'Relax and rejuvenate with our spa services.',
    price: 50.0,
  },
  {
    id: 3,
    name: 'Gym',
    description: 'Stay fit and healthy with our state-of-the-art gym.',
    price: 20.0,
  },
  {
    id: 4,
    name: 'Swimming Pool',
    description: 'Take a dip in our luxurious swimming pool.',
    price: 15.0,
  },
  {
    id: 5,
    name: 'Laundry Service',
    description: 'Get your clothes cleaned and pressed quickly.',
    price: 8.0,
  },
  {
    id: 6,
    name: 'Airport Shuttle',
    description: 'Convenient transportation to and from the airport.',
    price: 25.0,
  },
  {
    id: 7,
    name: 'Business Center',
    description: 'Access to computers, printers, and meeting rooms.',
    price: 30.0,
  },
  {
    id: 8,
    name: 'Concierge Service',
    description: 'Personalized assistance with reservations and recommendations.',
    price: 0.0,
  },
  {
    id: 9,
    name: 'Massage Therapy',
    description: 'Experience relaxation with a professional massage.',
    price: 60.0,
  },
  {
    id: 10,
    name: 'Childcare Services',
    description: 'Safe and fun childcare for your little ones.',
    price: 40.0,
  },
];

const ServicesPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-6">Our Services</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
