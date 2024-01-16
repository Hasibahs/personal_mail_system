import React from 'react';
import Header from './components/header/Header';
import AvailabilityForm from './components/AvailabilityForm/AvailabilityForm';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <AvailabilityForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
