// import React from 'react';

// const RoomCard = ({ room }) => {
//   return (
//     <div className="border p-4 rounded-md shadow-md">
//       <h2 className="text-xl font-semibold mb-2">{room.name}</h2>
//       <p className="text-gray-600 mb-1">{room.description}</p>
//       <p className="text-gray-800 font-bold">Price: ${room.price.toFixed(2)}</p>
//     </div>
//   );
// };

// export default RoomCard;


// RoomCard.js
import React from 'react';

const RoomCard = ({ room }) => {
  return (
    <div className="bg-white h-full rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative h-64">
        <img
          src={room.image}
          alt={room.name}
          loading = "lazy"
          className="w-full h-full object-cover transform hover:scale-105 transition-all duration-500"
        />
        {room.tag && (
          <span className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
            {room.tag}
          </span>
        )}
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{room.name}</h2>
        <p className="text-gray-600 mb-4">{room.description}</p>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-3xl font-bold text-blue-600">₹{room.price}</span>
            <span className="text-gray-500">/night</span>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors duration-300 transform hover:scale-105">
            Book Now
          </button>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {room.amenities.map((amenity, index) => (
            <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors duration-200">
              {amenity}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoomCard;

