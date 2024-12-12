import React from 'react';
import RoomCard from '../components/RoomCard';

const rooms = [
  {
    id: 1,
    name: 'Single Room',
    description: 'A cozy single room with a comfortable bed',
    price: 50.00
  },
  {
    id: 2,
    name: 'Double Room',
    description: 'A spacious double room with two beds',
    price: 80.00
  },
  {
    id: 3,
    name: 'Suite',
    description: 'A luxurious suite with a king-size bed and a living area',
    price: 150.00
  }
];

const RoomsPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Rooms</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>
    </div>
  );
};

export default RoomsPage;
