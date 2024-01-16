import React from 'react';
import Header from './components/header/Header';
import AvailabilityForm from './components/AvailabilityForm/AvailabilityForm';
import Footer from './components/Footer/Footer';
import RegistrationForm from './components/Register/Register';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <RegistrationForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
