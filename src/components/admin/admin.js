import React, { useState, useEffect } from "react";

function AdminPanel() {
  const [hotelAvailabilityData, setHotelAvailabilityData] = useState([]);

  useEffect(() => {
    // Replace 'your-api-endpoint' with the endpoint from which you fetch hotel data
    fetch("http://localhost/fin/admin.php")
      .then((response) => response.json())
      .then((data) => setHotelAvailabilityData(data))
      .catch((error) => console.error("Fetch error:", error));
  }, []);

  return (
    <div className="admin-dashboard">
      <h2>Hotel Availability Data</h2>
      <table>
        <thead>
          <tr>
            <th>Id no</th>
            <th>Hotel Name</th>
            <th>Room Type</th>
            <th>Available Room</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Price per Day</th>
          </tr>
        </thead>
        <tbody>
          {hotelAvailabilityData.map((data, index) => (
            <tr key={index}>
              <td>{data.id}</td>
              <td>{data.hotel_name}</td>
              <td>{data.room_type}</td>
              <td>{data.rooms_available}</td>
              <td>{data.start_date}</td>
              <td>{data.end_date}</td>
              <td>{data.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminPanel;
