import React, { useState } from 'react';

const BookingForm = ({ onSubmit, initialData = {} }) => {
  // Default room types with details
  const roomTypes = [
    { 
      value: 'standard', 
      label: 'Standard Room', 
      price: 100, 
      description: 'Comfortable room with essential amenities',
      maxGuests: 2
    },
    { 
      value: 'deluxe', 
      label: 'Deluxe Room', 
      price: 200, 
      description: 'Spacious room with premium features',
      maxGuests: 3
    },
    { 
      value: 'suite', 
      label: 'Executive Suite', 
      price: 350, 
      description: 'Luxurious suite with separate living area',
      maxGuests: 4
    },
    { 
      value: 'family', 
      label: 'Family Room', 
      price: 250, 
      description: 'Ideal for families, multiple bed options',
      maxGuests: 5
    }
  ];

  // Initial state with merged initial data
  const [bookingData, setBookingData] = useState({
    name: initialData.name || '',
    email: initialData.email || '',
    phone: initialData.phone || '',
    roomType: initialData.roomType || '',
    checkIn: initialData.checkIn || '',
    checkOut: initialData.checkOut || '',
    guests: initialData.guests || 1,
    specialRequests: initialData.specialRequests || ''
  });

  // Validation states
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear specific error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;

    // Name validation
    if (!bookingData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    // Email validation
    if (!bookingData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(bookingData.email)) {
      newErrors.email = 'Invalid email format';
    }

    // Phone validation
    if (!bookingData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(bookingData.phone)) {
      newErrors.phone = 'Invalid phone number';
    }

    // Room type validation
    if (!bookingData.roomType) {
      newErrors.roomType = 'Please select a room type';
    }

    // Date validations
    const today = new Date();
    const checkIn = new Date(bookingData.checkIn);
    const checkOut = new Date(bookingData.checkOut);

    if (!bookingData.checkIn) {
      newErrors.checkIn = 'Check-in date is required';
    } else if (checkIn < today) {
      newErrors.checkIn = 'Check-in date cannot be in the past';
    }

    if (!bookingData.checkOut) {
      newErrors.checkOut = 'Check-out date is required';
    } else if (checkOut <= checkIn) {
      newErrors.checkOut = 'Check-out date must be after check-in';
    }

    // Guests validation
    const selectedRoom = roomTypes.find(r => r.value === bookingData.roomType);
    if (bookingData.guests < 1) {
      newErrors.guests = 'At least 1 guest is required';
    } else if (selectedRoom && bookingData.guests > selectedRoom.maxGuests) {
      newErrors.guests = `Maximum ${selectedRoom.maxGuests} guests for this room type`;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Calculate total price
  const calculateTotalPrice = () => {
    const selectedRoom = roomTypes.find(room => room.value === bookingData.roomType);
    if (!selectedRoom || !bookingData.checkIn || !bookingData.checkOut) return 0;

    const checkIn = new Date(bookingData.checkIn);
    const checkOut = new Date(bookingData.checkOut);
    const nights = Math.max(1, Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24)));

    return selectedRoom.price * nights * bookingData.guests;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // If validation passes, call the onSubmit prop with booking data
      onSubmit({
        ...bookingData,
        totalPrice: calculateTotalPrice()
      });
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-8 space-y-6">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Book Your Stay
        </h2>

        {/* Personal Information */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              value={bookingData.name}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none 
                ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Enter your full name"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              value={bookingData.email}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none 
                ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
        </div>

        {/* Contact and Room Details */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 mb-2">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={bookingData.phone}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none 
                ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Enter your phone number"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Room Type</label>
            <select
              name="roomType"
              value={bookingData.roomType}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none 
                ${errors.roomType ? 'border-red-500' : 'border-gray-300'}`}
            >
              <option value="">Select Room Type</option>
              {roomTypes.map(room => (
                <option key={room.value} value={room.value}>
                  {room.label} (${room.price}/night)
                </option>
              ))}
            </select>
            {errors.roomType && <p className="text-red-500 text-sm mt-1">{errors.roomType}</p>}
          </div>
        </div>

        {/* Dates and Guests */}
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <label className="block text-gray-700 mb-2">Check-In Date</label>
            <input
              type="date"
              name="checkIn"
              value={bookingData.checkIn}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none 
                ${errors.checkIn ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.checkIn && <p className="text-red-500 text-sm mt-1">{errors.checkIn}</p>}
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Check-Out Date</label>
            <input
              type="date"
              name="checkOut"
              value={bookingData.checkOut}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none 
                ${errors.checkOut ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.checkOut && <p className="text-red-500 text-sm mt-1">{errors.checkOut}</p>}
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Number of Guests</label>
            <input
              type="number"
              name="guests"
              min="1"
              value={bookingData.guests}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none 
                ${errors.guests ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.guests && <p className="text-red-500 text-sm mt-1">{errors.guests}</p>}
          </div>
        </div>

        {/* Special Requests */}
        <div>
          <label className="block text-gray-700 mb-2">Special Requests</label>
          <textarea
            name="specialRequests"
            value={bookingData.specialRequests}
            onChange={handleChange}
            rows="4"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
            placeholder="Any special requirements or requests?"
          ></textarea>
        </div>

        {/* Price Calculation */}
        <div className="bg-blue-50 p-4 rounded-lg text-center">
          <h3 className="text-xl font-bold">
            Total Estimated Price: ${calculateTotalPrice()}
          </h3>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Confirm Booking
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;