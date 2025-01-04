import React from 'react';
import { FaCalendarAlt, FaMapMarkerAlt, FaClock, FaUsers, FaTicketAlt } from 'react-icons/fa'; // Import required icons

const CulturalActivityCard = ({ 
  title, 
  description, 
  date, 
  location, 
  time, 
  participants, 
  price, 
  imageUrl 
}) => {
  return (
    <div className="max-w-sm bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      {/* Activity Image */}
      <div className="relative h-48 w-full">
        <img 
          src={imageUrl || "/api/placeholder/400/240"} 
          alt={title} 
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..."
          className="w-full h-full object-cover"
        />
        {price && (
          <div className="absolute top-3 right-3 bg-black/80 px-3 py-1 rounded-full flex items-center">
            <FaTicketAlt size={16} className="mr-2 text-white" />
            <span className="font-semibold text-white">₹{price}</span>
          </div>
        )}
      </div>

      {/* Activity Details */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>

        {/* Activity Meta Information */}
        <div className="space-y-2">
          <div className="flex items-center text-gray-600">
            <FaCalendarAlt size={18} className="mr-2 text-gray-500" />
            <span>{date}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <FaMapMarkerAlt size={18} className="mr-2 text-gray-500" />
            <span>{location}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <FaClock size={18} className="mr-2 text-gray-500" />
            <span>{time}</span>
          </div>
          {participants && (
            <div className="flex items-center text-gray-600">
              <FaUsers size={18} className="mr-2 text-gray-500" />
              <span>{participants} Participants</span>
            </div>
          )}
        </div>

        {/* Action Button */}
        <button className="w-full mt-4 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300">
          Register Now
        </button>
      </div>
    </div>
  );
};

export default CulturalActivityCard;

// Example Usage:
/*
function App() {
  return (
    <CulturalActivityCard 
      title="Traditional Dance Workshop"
      description="Learn traditional folk dance techniques from expert instructors."
      date="July 15, 2024"
      location="Community Arts Center"
      time="6:00 PM - 8:00 PM"
      participants={25}
      price={45}
      imageUrl="/path/to/dance-workshop-image.jpg"
    />
  );
}
*/
