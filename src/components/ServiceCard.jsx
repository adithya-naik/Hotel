import React from 'react';

const ServiceCard = ({ service }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300">
      <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
      <p className="text-gray-700 mb-4">{service.description}</p>
      <p className="text-blue-500 font-bold">Price: ${service.price.toFixed(2)}</p>
    </div>
  );
};

export default ServiceCard;
