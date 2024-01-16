// import React, { useState } from 'react';
import '../Register/Register'; // Create a corresponding CSS file for styling

import React from 'react';

const RegistrationForm = () => {
  const [hotelName, setHotelName] = React.useState('');
  const [emailAddress, setEmailAddress] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleHotelNameChange = (event) => {
    setHotelName(event.target.value);
  };

  const handleEmailAddressChange = (event) => {
    setEmailAddress(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    // Submit the form data to your backend
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Hotel Name:</label>
      <input
        type="text"
        value={hotelName}
        onChange={handleHotelNameChange}
      />
      <br />

      <label>Email Address:</label>
      <input
        type="email"
        value={emailAddress}
        onChange={handleEmailAddressChange}
      />
      <br />

      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
      />
      <br />

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
