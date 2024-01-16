import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Default styling
import './AvailabilityForm.css'; 
import { faHotel } from '@fortawesome/free-solid-svg-icons';
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
        <div className="form-row">
          <div className="input-group">
          <FontAwesomeIcon icon={faHouse} />
            <select
              id="room-type"
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
            >
              <option value="single">Single Room</option>
              <option value="double">Double Room</option>
              {/* ...other room types */}
            </select>
          </div>
          
          <div className="input-group">
          <FontAwesomeIcon icon={faHotel} />
            <input
              type="number"
              id="rooms-available"
              min="1"
              value={roomsAvailable}
              onChange={(e) => setRoomsAvailable(e.target.value)}
            />
          </div>
        </div>
        
        {/* ...other form elements */}
        
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
