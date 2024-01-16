import React, { useState } from 'react';
import Login from './components/login/Login';
import Header from './components/header/Header';
import Footer from './components/Footer/Footer';
import AvailabilityForm from './components/AvailabilityForm/AvailabilityForm'; // Assuming this is your main page component

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setLoggedIn(true); // Call this function when the user successfully logs in
  };

  const handleLogout = () => {
    setLoggedIn(false); // Call this function to log the user out
  };

  return (
    <div className="App">
      <Header />

      {!loggedIn ? (
        // Display the Login component if not logged in
        <Login onLoginSuccess={handleLoginSuccess} />
      ) : (
        // Display the main content (e.g., AvailabilityForm) if logged in
        <AvailabilityForm onLogout={handleLogout} />
      )}

      <Footer />
    </div>
  );
}

export default App;
