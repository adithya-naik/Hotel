import React from 'react';

const RoomCard = ({ room }) => {
  return (
    <div className="border p-4 rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-2">{room.name}</h2>
      <p className="text-gray-600 mb-1">{room.description}</p>
      <p className="text-gray-800 font-bold">Price: ${room.price.toFixed(2)}</p>
    </div>
  );
};

export default RoomCard;
