import React, { useState } from "react";
import "./Registration.css";
import App from "../../App";
import Login from "../login/Login";
import { useNavigate } from "react-router-dom";

const Registration = ({ onRegistrationSuccess }) => {
  const [hotelName, setHotelName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user"); // Default role is "user"

  const [hotelNameError, setHotelNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const navigate = useNavigate();

  const inputClassName = (error) => `form-group ${error ? "input-error" : ""}`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted", { hotelName, email, password, role });

    setHotelNameError(!hotelName);
    setEmailError(!email || !/\S+@\S+\.\S+/.test(email));
    setPasswordError(!password || password.length < 4 || password.length > 12);

    if (
      hotelName &&
      email &&
      /\S+@\S+\.\S+/.test(email) &&
      password.length >= 4 &&
      password.length <= 12
    ) {
      try {
        const response = await fetch("http://localhost/fin/registration.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ hotelName, email, password, role }),
        });

        const responseData = await response.json();

        if (response.ok) {
          console.log(responseData.message);
          onRegistrationSuccess();
        } else {
          console.error(responseData.message);
        }
      } catch (error) {
        console.error("There was an error!", error);
      }
    }
  };

  return (
    <form className="registration-form" onSubmit={handleSubmit} noValidate>
      <div className={inputClassName(hotelNameError)}>
        <label htmlFor="hotelName">Enter your Hotel Name</label>

        <label htmlFor="role">Select your Role:</label>
        <select
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <input
          type="text"
          id="hotelName"
          value={hotelName}
          onChange={(e) => setHotelName(e.target.value)}
          placeholder="Enter your hotel name"
        />
        {hotelNameError && (
          <small className="error-message">Hotel name is required.</small>
        )}
      </div>

      <div className={inputClassName(emailError)}>
        <label htmlFor="email">Enter Email address for registration</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email address"
        />
        {emailError && (
          <small className="error-message">Invalid email address.</small>
        )}
      </div>

      <div className={inputClassName(passwordError)}>
        <label htmlFor="password">Enter your password for registration</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
        {passwordError && (
          <small className="error-message">
            Password must be between 4 and 12 characters.
          </small>
        )}
      </div>

      <div className="form-actions">
        <button
          type="button"
          onClick={() => navigate("/login")}
          className="btn-login"
        >
          Already Registered? Log in
        </button>
        <button type="submit" className="btn-register">
          Register
        </button>
      </div>
    </form>
  );
};

export default Registration;
