import React from 'react';
import Menu from '../menu/Menu';
import Navbar from '../navbar/Navbar';
import { Outlet } from 'react-router-dom';
import './Layout.css';

const Layout = () => {
  return (
    <div className="layout-container">
      {/* Left Sidebar (Menu) */}
      <aside className="sidebar">
        <Menu />
      </aside>

      {/* Main Content Area */}
      <div className="main-content">
        {/* Navbar at the top */}
        <Navbar />
        
        {/* Page Content */}
        <div className="page-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
