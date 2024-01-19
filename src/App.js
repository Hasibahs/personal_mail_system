import React, { useState } from "react";
import Login from "./components/login/Login";
import Header from "./components/header/Header";
import AvailabilityForm from "./components/AvailabilityForm/AvailabilityForm";
import Footer from "./components/Footer/Footer";
import Registration from "./components/registration/Registration";

function App() {
  
  const [currentView, setCurrentView] = useState("login");

  const handleLoginSuccess = () => {
    setCurrentView("availability"); 
  };
  const handleRegistrationSuccess = () => {
    setCurrentView("login"); 
  };

  const handleGoToRegistration = () => {
    setCurrentView("registration");
  };

  const handleGoToLogin = () => {
    setCurrentView("login");
  };

  const renderView = () => {
    switch (currentView) {
      case "login":
        return (
          <Login
            onLoginSuccess={handleLoginSuccess}
            onGoToRegistration={handleGoToRegistration}
          />
        );
      case "registration":
        return (
          <Registration
            onGoToLogin={handleGoToLogin}
            onRegistrationSuccess={handleRegistrationSuccess}
          />
        );

      case "availability":
        return <AvailabilityForm />;
      default:
        return (
          <Login
            onLoginSuccess={handleLoginSuccess}
            onGoToRegistration={handleGoToRegistration}
          />
        );
    }
  };

  return (
    <div className="App">
      <Header />
      {renderView()}
      <Footer />
    </div>
  );
}

export default App;
