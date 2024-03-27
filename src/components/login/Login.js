import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = async (event) => {
    event.preventDefault();

    // Send credentials to the backend
    try {
      const response = await fetch("http://localhost/fin/login.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const responseData = await response.json();

      if (response.ok && responseData.success) {
        const redirectPath = responseData.isAdmin
          ? "/admin-panel"
          : "/availability";

        console.log(`Redirecting to ${redirectPath}...`); // Confirm the redirect path
        navigate(redirectPath);
      } else {
        setLoginError(
          responseData.message || "Login failed with unknown error."
        );
      }
    } catch (error) {
      console.error("Login error:", error);
      setLoginError(error.message || "Failed to login.");
    }
  };
  // Redirection for registration not handled here, should be handled via Link or history.push

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

        <Link to="/registration" className="register-button">
          Register
        </Link>
      </form>
    </div>
  );
}

export default Login;
