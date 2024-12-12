import React, { useState } from 'react';

const RoomBookingForm = () => {
  const [roomType, setRoomType] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [numberOfGuests, setNumberOfGuests] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic to handle form submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Room Type:
        <select value={roomType} onChange={(event) => setRoomType(event.target.value)}>
          <option value="">Select Room Type</option>
          <option value="single">Single</option>
          <option value="double">Double</option>
          <option value="suite">Suite</option>
        </select>
      </label>
      <br />
      <label>
        Check-in Date:
        <input type="date" value={checkInDate} onChange={(event) => setCheckInDate(event.target.value)} />
      </label>
      <br />
      <label>
        Check-out Date:
        <input type="date" value={checkOutDate} onChange={(event) => setCheckOutDate(event.target.value)} />
      </label>
      <br />
      <label>
        Number of Guests:
        <input type="number" value={numberOfGuests} onChange={(event) => setNumberOfGuests(event.target.value)} />
      </label>
      <br />
      <button type="submit">Book Room</button>
    </form>
  );
};

export default RoomBookingForm;

