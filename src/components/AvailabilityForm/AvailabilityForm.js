import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Default styling
import './AvailabilityForm.css'; 

function AvailabilityForm() {
  // State for the form fields
  const [roomType, setRoomType] = useState('Single Room');
  const [roomsAvailable, setRoomsAvailable] = useState(1);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to handle form submission
  };

  return (
    <div className="availability-form-container">
      <form onSubmit={handleSubmit} className="availability-form">
        <h2>Select Availability</h2>
        <div className="form-group">
          <label htmlFor="room-type">Room Type</label>
          <select
            id="room-type"
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
          >
            <option value="single">Single Room</option>
            <option value="double">Double Room</option>
            {/* Add more room types as needed */}
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="rooms-available">Room Available</label>
          <input
            type="number"
            id="rooms-available"
            min="1"
            value={roomsAvailable}
            onChange={(e) => setRoomsAvailable(e.target.value)}
          />
        </div>
        
        {/*  Date Pickers for Start Date and End Date */}

        <div className="form-group">
          <label htmlFor="start-date">Start Date:</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            id="start-date"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="end-date">End Date:</label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            id="end-date"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="price">Price Per day:</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        
        <button type="button" className="add-room-type-btn">Add more Room Types +</button>
        
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
}

export default AvailabilityForm;
