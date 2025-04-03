import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
  const menuItems = [
    { icon: '🏠', text: 'Home', path: '/' },
    { icon: '🏢', text: 'Companies', path: '/companies' },
    { icon: '🔍', text: 'Job Search', path: '/job-search' },
    { icon: '👤', text: 'Profile', path: '/profile' },
    { icon: '🔔', text: 'Notifications', path: '/notifications' },
    { icon: '⚙️', text: 'Settings', path: '/settings' },
    { icon: '📞', text: 'Support', path: '/support' },
  ];

  return (
    <nav className="menu">
      <ul className="menu-list">
        {menuItems.map((item, index) => (
          <li key={index} className="menu-item">
            <NavLink 
              to={item.path}
              className={({ isActive }) => isActive ? 'menu-link active-link' : 'menu-link'}
            >
              <span className="menu-icon">{item.icon}</span>
              <span className="menu-text">{item.text}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;