import React, { useState } from "react";
import "./Login.css";

function Login({ onLoginSuccess, props, onGoToRegistration }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();

    // Send credentials to the backend
    try {
      const response = await fetch("http://localhost/fin/login.php", {
        // need to Update with actual login endpoint
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const responseData = await response.json();

      if (response.ok && responseData.success) {
        onLoginSuccess();
      } else {
        setLoginError(responseData.message);
      }
    } catch (error) {
      console.error("Login error:", error);
      setLoginError("Failed to login.");
    }
  };

  const handleRegistrationRedirect = () => {
    window.location.href = "../registration/Registration";
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {loginError && <div className="login-error">{loginError}</div>}
        <button type="submit" className="login-button">
          Login
        </button>

        <button onClick={onGoToRegistration} className="register-button">
          Register
        </button>
      </form>
    </div>
  );
}

export default Login;
