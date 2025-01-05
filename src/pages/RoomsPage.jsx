import React, { useState, useEffect } from 'react';
import RoomCard from '../components/RoomCard';

const RoomsPage = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedAmenity, setSelectedAmenity] = useState('all');
  const [collapse, setCollapse] = useState(false);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await fetch('https://myistay.freewebhostmost.com/fetch_rooms.php');
        const text = await response.text(); // Get raw response
        console.log('Raw response:', text); // Log it to console
        
        try {
          const data = JSON.parse(text); // Try to parse it
          setRooms(data);
        } catch (parseError) {
          console.error('JSON Parse Error:', parseError);
          console.log('Problem position:', text.substr(9080, 10)); // Look around position 9085
          setError('Invalid JSON response from server');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  // Extract unique amenities from rooms data
  const amenities = ['all', ...new Set(rooms.flatMap(room => 
    Array.isArray(room.amenities) ? room.amenities : []
  ))];
  const amenitiesToShow = collapse ? amenities : amenities.slice(0, 10);

  // Filter rooms based on selected amenity
  const filteredRooms = selectedAmenity === 'all'
    ? rooms
    : rooms.filter(room => 
        Array.isArray(room.amenities) && room.amenities.includes(selectedAmenity)
      );

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl font-semibold">Loading rooms...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl font-semibold text-red-600">
          Error loading rooms: {error}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">
          Our Rooms & Suites
        </h1>
        <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
          Experience luxury and comfort in our carefully designed rooms and suites
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {amenitiesToShow.map((amenity) => (
            <button
              key={amenity}
              onClick={() => setSelectedAmenity(amenity)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedAmenity === amenity
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-blue-50'
              }`}
            >
              {amenity.charAt(0).toUpperCase() + amenity.slice(1)}
            </button>
          ))}
          {amenities.length > 10 && (
            <button
              onClick={() => setCollapse(!collapse)}
              className="px-4 py-2 rounded-full text-sm bg-gray-900 text-white font-medium hover:bg-gray-800"
            >
              {collapse ? 'Show Less' : 'Show All'}
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRooms.map((room) => (
            <div key={room.id}>
              <RoomCard room={room} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoomsPage;
