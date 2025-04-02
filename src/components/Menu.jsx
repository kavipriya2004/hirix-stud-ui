import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

const Menu = () => {
  return (
    <nav className="menu">
      <ul className="menu-list">
        <li className="menu-item">
          <NavLink to="/" className={({isActive}) => isActive ? 'active-link' : ''}>
            <span className="menu-icon">🏠</span>
            <span className="menu-text">Home</span>
          </NavLink>
        </li>
        <li className="menu-item">
          <NavLink to="/companies" className={({isActive}) => isActive ? 'active-link' : ''}>
            <span className="menu-icon">📊</span>
            <span className="menu-text">Companies</span>
          </NavLink>
        </li>
        <li className="menu-item">
          <NavLink to="/job-search" className={({isActive}) => isActive ? 'active-link' : ''}>
            <span className="menu-icon">🔍</span>
            <span className="menu-text">Job Search</span>
          </NavLink>
        </li>
        <li className="menu-item">
          <NavLink to="/profile" className={({isActive}) => isActive ? 'active-link' : ''}>
            <span className="menu-icon">👤</span>
            <span className="menu-text">Profile</span>
          </NavLink>
        </li>
        <li className="menu-item">
          <NavLink to="/notifications" className={({isActive}) => isActive ? 'active-link' : ''}>
            <span className="menu-icon">🔔</span>
            <span className="menu-text">Notifications</span>
          </NavLink>
        </li>
        <li className="menu-item">
          <NavLink to="/settings" className={({isActive}) => isActive ? 'active-link' : ''}>
            <span className="menu-icon">⚙️</span>
            <span className="menu-text">Settings</span>
          </NavLink>
        </li>
        <li className="menu-item">
          <NavLink to="/support" className={({isActive}) => isActive ? 'active-link' : ''}>
            <span className="menu-icon">📞</span>
            <span className="menu-text">Support</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;