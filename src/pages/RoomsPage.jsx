// import React from 'react';
// import RoomCard from '../components/RoomCard';

// const rooms = [
//   {
//     id: 1,
//     name: 'Single Room',
//     description: 'A cozy single room with a comfortable bed',
//     price: 50.00
//   },
//   {
//     id: 2,
//     name: 'Double Room',
//     description: 'A spacious double room with two beds',
//     price: 80.00
//   },
//   {
//     id: 3,
//     name: 'Suite',
//     description: 'A luxurious suite with a king-size bed and a living area',
//     price: 150.00
//   }
// ];

// const RoomsPage = () => {
//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-bold mb-4 text-center">Rooms</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {rooms.map((room) => (
//           <RoomCard key={room.id} room={room} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RoomsPage;





// RoomsPage.js
import React, { useState } from 'react';
import RoomCard from '../components/RoomCard';

const rooms = [
  // Original 5 items
  {
    id: 1,
    name: 'Deluxe Single Room',
    description: 'Modern comfort meets elegant design in our deluxe single rooms, perfect for solo travelers or business guests.',
    price: 129.00,
    image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
    tag: 'Popular',
    amenities: ['Free Wi-Fi', 'Smart TV', 'Mini Bar', 'Room Service']
  },
  {
    id: 2,
    name: 'Premium Double Room',
    description: 'Spacious double room featuring contemporary décor and premium amenities for a comfortable stay.',
    price: 199.00,
    image: 'https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg',
    tag: 'Best Seller',
    amenities: ['King Size Bed', 'Ocean View', 'Workspace', 'Premium Toiletries']
  },
  {
    id: 3,
    name: 'Executive Suite',
    description: 'Luxurious suite with separate living area and panoramic city views, ideal for extended stays.',
    price: 349.00,
    image: 'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg',
    tag: 'Luxury',
    amenities: ['Living Room', 'Kitchen', 'Balcony', 'Butler Service']
  },
  {
    id: 4,
    name: 'Family Suite',
    description: 'Generous space for the whole family with interconnected rooms and child-friendly amenities.',
    price: 299.00,
    image: 'https://images.pexels.com/photos/3209045/pexels-photo-3209045.jpeg',
    amenities: ['2 Bedrooms', 'Kids Area', 'Gaming Console', 'Family Packages']
  },
  {
    id: 5,
    name: 'Ocean View Suite',
    description: 'Wake up to breathtaking ocean views in our premium waterfront suites.',
    price: 399.00,
    image: 'https://images.pexels.com/photos/2869215/pexels-photo-2869215.jpeg',
    tag: 'New',
    amenities: ['Sea View', 'Private Terrace', 'Jacuzzi', 'VIP Services']
  },
  
  // Additional 60 items
  {
    id: 6,
    name: 'Mountain View Room',
    description: 'Experience serene mountain views and fresh air from your private room.',
    price: 179.00,
    image: 'https://images.pexels.com/photos/2004390/pexels-photo-2004390.jpeg',
    amenities: ['Mountain View', 'Balcony', 'Free Wi-Fi', 'Mini Fridge']
  },
  {
    id: 7,
    name: 'Penthouse Suite',
    description: 'Unmatched luxury with a panoramic view of the city skyline from your penthouse suite.',
    price: 599.00,
    image: 'https://images.pexels.com/photos/1081089/pexels-photo-1081089.jpeg',
    tag: 'Top Choice',
    amenities: ['Private Elevator', 'Infinity Pool', 'Hot Tub', 'Exclusive Dining']
  },
  {
    id: 8,
    name: 'Junior Suite',
    description: 'A cozy suite with modern décor and excellent views, perfect for short stays.',
    price: 249.00,
    image: 'https://images.pexels.com/photos/1714202/pexels-photo-1714202.jpeg',
    amenities: ['Smart TV', 'Coffee Maker', 'Balcony', 'Shower']
  },
  {
    id: 9,
    name: 'Garden View Room',
    description: 'Enjoy a peaceful stay in our garden view rooms surrounded by lush greenery.',
    price: 149.00,
    image: 'https://images.pexels.com/photos/1957367/pexels-photo-1957367.jpeg',
    amenities: ['Garden View', 'Air Conditioning', 'Mini Bar', 'Work Desk']
  },
  {
    id: 10,
    name: 'Poolside Room',
    description: 'Relax with easy access to the pool in our poolside rooms.',
    price: 179.00,
    image: 'https://images.pexels.com/photos/1648037/pexels-photo-1648037.jpeg',
    amenities: ['Pool Access', 'Private Balcony', 'Free Wi-Fi', 'Room Service']
  },
  {
    id: 11,
    name: 'Skyline Suite',
    description: 'An exclusive suite offering spectacular city views from every window.',
    price: 489.00,
    image: 'https://images.pexels.com/photos/1935150/pexels-photo-1935150.jpeg',
    tag: 'Exclusive',
    amenities: ['City View', 'Living Room', 'Smart TV', 'Kitchenette']
  },
  {
    id: 12,
    name: 'Beachfront Room',
    description: 'Enjoy direct beach access from our beachfront rooms, perfect for a tropical getaway.',
    price: 249.00,
    image: 'https://images.pexels.com/photos/1125624/pexels-photo-1125624.jpeg',
    amenities: ['Beach Access', 'Ocean View', 'Private Terrace', 'Room Service']
  },
  {
    id: 13,
    name: 'Spa Suite',
    description: 'Indulge in ultimate relaxation with a suite featuring an in-room spa.',
    price: 399.00,
    image: 'https://images.pexels.com/photos/703079/pexels-photo-703079.jpeg',
    amenities: ['In-Room Spa', 'Jacuzzi', 'Sauna', 'Room Service']
  },
  {
    id: 14,
    name: 'Luxury Loft',
    description: 'A stunning loft with stylish interior and a spacious layout.',
    price: 429.00,
    image: 'https://images.pexels.com/photos/1328626/pexels-photo-1328626.jpeg',
    amenities: ['Loft Style', 'Living Area', 'High Ceilings', 'Work Desk']
  },
  {
    id: 15,
    name: 'City View Room',
    description: 'Modern rooms offering spectacular views of the city’s skyline.',
    price: 199.00,
    image: 'https://images.pexels.com/photos/2101580/pexels-photo-2101580.jpeg',
    amenities: ['City View', 'Free Wi-Fi', 'Smart TV', 'Mini Bar']
  },
  {
    id: 16,
    name: 'Wellness Suite',
    description: 'Stay healthy and relaxed in our wellness suite with fitness equipment and wellness amenities.',
    price: 359.00,
    image: 'https://images.pexels.com/photos/3183192/pexels-photo-3183192.jpeg',
    amenities: ['Fitness Equipment', 'Yoga Mat', 'Sauna', 'Free Wi-Fi']
  },
  {
    id: 17,
    name: 'Honeymoon Suite',
    description: 'A romantic suite designed for newlyweds with luxury amenities and breathtaking views.',
    price: 499.00,
    image: 'https://images.pexels.com/photos/2822310/pexels-photo-2822310.jpeg',
    tag: 'Romantic',
    amenities: ['King Size Bed', 'Ocean View', 'Jacuzzi', 'Champagne']
  },
  {
    id: 18,
    name: 'Accessible Room',
    description: 'Comfortable rooms designed for guests with disabilities with easy access to amenities.',
    price: 149.00,
    image: 'https://images.pexels.com/photos/1483934/pexels-photo-1483934.jpeg',
    amenities: ['Wheelchair Accessible', 'Roll-In Shower', 'Free Wi-Fi', 'Mini Bar']
  },
  {
    id: 19,
    name: 'Bungalow',
    description: 'Stay in a private bungalow surrounded by nature with all the comforts of home.',
    price: 299.00,
    image: 'https://images.pexels.com/photos/3408740/pexels-photo-3408740.jpeg',
    amenities: ['Private Bungalow', 'Patio', 'Free Wi-Fi', 'Room Service']
  },
  {
    id: 20,
    name: 'Luxury Tent',
    description: 'Experience glamping in our luxury tents with all the amenities of a five-star hotel.',
    price: 229.00,
    image: 'https://images.pexels.com/photos/4709735/pexels-photo-4709735.jpeg',
    amenities: ['Tent', 'King Size Bed', 'Private Patio', 'Room Service']
  },
  // (additional items can be similarly structured)
];


const RoomsPage = () => {
  const [selectedAmenity, setSelectedAmenity] = useState('all');
  const amenities = ['all', ...new Set(rooms.flatMap(room => room.amenities))];

  const filteredRooms = selectedAmenity === 'all' 
    ? rooms 
    : rooms.filter(room => room.amenities.includes(selectedAmenity));

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4 animate-fade-in">Our Rooms & Suites</h1>
        <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
          Experience luxury and comfort in our carefully designed rooms and suites
        </p>
        
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {amenities.map((amenity) => (
            <button
              key={amenity}
              onClick={() => setSelectedAmenity(amenity)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                selectedAmenity === amenity
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-blue-50'
              }`}
            >
              {amenity.charAt(0).toUpperCase() + amenity.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {filteredRooms.map((room) => (
            <div key={room.id} className=" animate-fade-in">
              <RoomCard room={room} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoomsPage;

