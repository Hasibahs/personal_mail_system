import React, { useState } from 'react';
import './AvailabilityForm.css';
import roomIcon from './icons/room-icon.svg'; // Path to your room icon
import availableIcon from './icons/available-icon.svg'; // Path to your available icon


const AvailabilityForm = () => {
    const [roomType, setRoomType] = useState('Single Room');
    const [roomsAvailable, setRoomsAvailable] = useState(1);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [price, setPrice] = useState('');

    // Basic validation for dates
    const handleSubmit = (event) => {
        event.preventDefault();
        if (new Date(startDate) > new Date(endDate)) {
            alert("End date must be after start date.");
            return;
        }
        const formData = { roomType, roomsAvailable, startDate, endDate, price };
        console.log(formData);
        // typically send formData to my backend server.
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Add other form fields */}
            <label>
                Room Type:
                <select value={roomType} onChange={(e) => setRoomType(e.target.value)}>
                    <option value="Single Room">Single Room</option>
                    <option value="Double Room">Double Room</option>
                    <option value="Suite">Suite</option>
                    {/* Add other options as needed */}
                </select>
            </label>
            {/* Add other form fields */}
            <button type="submit">Submit</button>
        </form>
    );
};

export default AvailabilityForm;
