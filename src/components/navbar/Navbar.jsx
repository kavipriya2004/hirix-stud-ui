import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="search-container">
        <span className="search-icon">🔍</span>
        <input type="text" placeholder="Search for jobs" className="search-input" />
      </div>
      <div className="navbar-right">
        <button className="settings-button">
          <span className="settings-icon">⚙️</span>
        </button>
        <button className="notifications-button">
          <span className="notifications-icon">🔔</span>
        </button>
        <div className="user-profile">
          <img src="/api/placeholder/40/40" alt="User profile" className="avatar" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;