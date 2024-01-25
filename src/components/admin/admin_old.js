import React, { useState, useEffect } from "react";
import "../admin/admin.css";

function Admin() {
  const [hotelData, setHotelData] = useState([]);

  useEffect(() => {
    const apiUrl = "http://localhost/fin/admin.php";

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setHotelData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="admin-panel">
      <h2>Admin Panel</h2>
      <table className="hotel-table">
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
          {hotelData.map((hotel, index) => (
            <tr key={index}>
              <td>{hotel.id}</td>
              <td>{hotel.hotel_name}</td>
              <td>{hotel.room_type}</td>
              <td>{hotel.rooms_available}</td>
              <td>{hotel.start_date}</td>
              <td>{hotel.end_date}</td>
              <td>${hotel.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;
