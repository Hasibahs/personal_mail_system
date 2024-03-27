import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./components/login/Login";
import Header from "./components/header/Header";
import AvailabilityForm from "./components/AvailabilityForm/AvailabilityForm";
import Footer from "./components/Footer/Footer";
import Registration from "./components/registration/Registration";
import AdminPanel from "./components/admin/admin";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {" "}
          {/* Use 'Routes' instead of 'Switch' */}
          <Route path="/" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/availability" element={<AvailabilityForm />} />
          <Route path="/admin-panel" element={<AdminPanel />} />
          <Route path="*" element={<Navigate to="/" replace />} />{" "}
          {/* Replace 'Redirect' with 'Navigate' */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
