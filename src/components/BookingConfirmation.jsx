import React, { useState } from 'react';

const BookingPage = () => {
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    phone: '',
    roomType: '',
    checkIn: '',
    checkOut: '',
    guests: 1,
    specialRequests: ''
  });

  const roomTypes = [
    { value: 'standard', label: 'Standard Room', price: 100 },
    { value: 'deluxe', label: 'Deluxe Room', price: 200 },
    { value: 'suite', label: 'Executive Suite', price: 350 },
    { value: 'family', label: 'Family Room', price: 250 }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculateTotalPrice = () => {
    const selectedRoom = roomTypes.find(room => room.value === bookingData.roomType);
    if (!selectedRoom || !bookingData.checkIn || !bookingData.checkOut) return 0;

    const checkIn = new Date(bookingData.checkIn);
    const checkOut = new Date(bookingData.checkOut);
    const nights = Math.max(1, Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24)));

    return selectedRoom.price * nights * bookingData.guests;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the booking data to a backend service
    console.log('Booking Submitted:', bookingData);
    alert('Booking Submitted Successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="container mx-auto max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-8">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Book Your Stay
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={bookingData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={bookingData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            {/* Contact and Room Details */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={bookingData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Room Type
                </label>
                <select
                  name="roomType"
                  value={bookingData.roomType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Room Type</option>
                  {roomTypes.map(room => (
                    <option key={room.value} value={room.value}>
                      {room.label} (${room.price}/night)
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Dates and Guests */}
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Check-In Date
                </label>
                <input
                  type="date"
                  name="checkIn"
                  value={bookingData.checkIn}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Check-Out Date
                </label>
                <input
                  type="date"
                  name="checkOut"
                  value={bookingData.checkOut}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Number of Guests
                </label>
                <input
                  type="number"
                  name="guests"
                  min="1"
                  max="6"
                  value={bookingData.guests}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Special Requests */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Special Requests
              </label>
              <textarea
                name="specialRequests"
                value={bookingData.specialRequests}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Any special requirements or requests?"
              ></textarea>
            </div>

            {/* Price Calculation */}
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-xl font-bold text-center">
                Total Estimated Price: ${calculateTotalPrice()}
              </h3>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300 text-lg font-semibold"
              >
                Confirm Booking
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;