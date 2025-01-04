import React from 'react';
import { 
  UtensilsCrossed, 
  Bell, 
  Waves, 
  Heart, 
  Wifi, 
  Car 
} from 'lucide-react';

const FeaturedServices = () => {
  const services = [
    { 
      icon: <UtensilsCrossed className="w-8 h-8" />, 
      title: 'Fine Dining', 
      description: 'Experience world-class cuisine crafted by top chefs.' 
    },
    { 
      icon: <Bell className="w-8 h-8" />, 
      title: '24/7 Concierge', 
      description: 'Always available to cater to your needs.' 
    },
    { 
      icon: <Waves className="w-8 h-8" />, 
      title: 'Swimming Pool', 
      description: 'Relax in our state-of-the-art pool facilities.' 
    },
    { 
      icon: <Heart className="w-8 h-8" />, 
      title: 'Luxury Spa', 
      description: 'Indulge in rejuvenating spa treatments.' 
    },
    { 
      icon: <Wifi className="w-8 h-8" />, 
      title: 'Free WiFi', 
      description: 'Stay connected with high-speed internet.' 
    },
    { 
      icon: <Car className="w-8 h-8" />, 
      title: 'Valet Parking', 
      description: 'Convenient valet services for your vehicles.' 
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Our Featured Services
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 text-blue-600">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;