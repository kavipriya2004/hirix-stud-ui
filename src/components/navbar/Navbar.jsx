import React from 'react';
import "../../App.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="search-container">
        <input type="text" placeholder="Search for jobs" className="search-input" />
        <button className="search-icon">
          <i>🔍</i>
        </button>
      </div>
      <div className="navbar-right">
        <button className="settings-button">⚙️</button>
        <button className="notifications-button">🔔</button>
        <div className="user-profile">
          <div className="avatar"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
