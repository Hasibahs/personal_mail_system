import React from 'react';
import './Header.css'; 
import sampleImage from '../photo/header.jpg';

function Header() {
  return (
    <div className="header" style={{ backgroundImage: `url(${sampleImage})` }}>
      <h1 className="header-text">Help Us Help You: Share Your Dates, Enjoy Great Rates!</h1>
    </div>
  );
}

export default Header;
