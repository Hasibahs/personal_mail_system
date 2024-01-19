import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faHotel } from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../AvailabilityForm/AvailabilityForm.css";

function AvailabilityForm() {
  const [availability, setAvailability] = useState([
    {
      roomType: "Single Room",
      roomsAvailable: 1,
      startDate: new Date(),
      endDate: new Date(),
      price: "",
    },
  ]);

  const addRoomType = () => {
    setAvailability([
      ...availability,
      {
        roomType: "Single Room",
        roomsAvailable: 1,
        startDate: new Date(),
        endDate: new Date(),
        price: "",
      },
    ]);
  };

  const handleRoomTypeChange = (index, event) => {
    const updatedAvailability = [...availability];
    updatedAvailability[index].roomType = event.target.value;
    setAvailability(updatedAvailability);
  };

  const handleRoomsAvailableChange = (index, event) => {
    const updatedAvailability = [...availability];
    updatedAvailability[index].roomsAvailable = event.target.value;
    setAvailability(updatedAvailability);
  };

  const handleStartDateChange = (index, date) => {
    const updatedAvailability = [...availability];
    updatedAvailability[index].startDate = date;
    setAvailability(updatedAvailability);
  };

  const handleEndDateChange = (index, date) => {
    const updatedAvailability = [...availability];
    updatedAvailability[index].endDate = date;
    setAvailability(updatedAvailability);
  };

  const handlePriceChange = (index, event) => {
    const updatedAvailability = [...availability];
    updatedAvailability[index].price = event.target.value;
    setAvailability(updatedAvailability);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // 'userId' will be replace with the actual ID from your authentication
    const userId = 1;
    // Transform the dates into 'YYYY-MM-DD' format
    const transformedAvailability = availability.map((entry) => ({
      ...entry,
      startDate: formatDate(entry.startDate),
      endDate: formatDate(entry.endDate),
    }));

    try {
      const response = await fetch("http://localhost/fin/availability.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, roomTypes: transformedAvailability }),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData.message);
      } else {
        const text = await response.text();
        console.error("Failed to submit form. Response:", text);
      }
    } catch (error) {
      console.error("There was an error submitting the form:", error);
    }
  };
  // function to transform date to 'YYYY-MM-DD' format
  function formatDate(date) {
    return new Date(date).toISOString().split("T")[0];
  }

  return (
    <div className="availability-form-container">
      <form onSubmit={handleSubmit}>
        <h2>Select Availability</h2>
        {availability.map((entry, index) => (
          <div key={index}>
            <label>
              Room Type:
              <select
                value={entry.roomType}
                onChange={(e) => handleRoomTypeChange(index, e)}
              >
                <option value="Single Room">Single Room</option>
                <option value="Double Room">Double Room</option>
                {/* Add more room types */}
              </select>
            </label>
            <label>
              Rooms Available:
              <input
                type="number"
                value={entry.roomsAvailable}
                onChange={(e) => handleRoomsAvailableChange(index, e)}
              />
            </label>
            <label>
              Start Date:
              <DatePicker
                class="react-datepicker__input-container"
                selected={entry.startDate}
                onChange={(date) => handleStartDateChange(index, date)}
              />
            </label>
            <label>
              End Date:
              <DatePicker
                selected={entry.endDate}
                onChange={(date) => handleEndDateChange(index, date)}
              />
            </label>
            <label>
              Price Per Day:
              <input
                type="text"
                value={entry.price}
                onChange={(e) => handlePriceChange(index, e)}
              />
            </label>
          </div>
        ))}
        <button type="button" class="add-room-type-btn" onClick={addRoomType}>
          Add more Room Types
        </button>
        <button type="submit" class="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AvailabilityForm;
