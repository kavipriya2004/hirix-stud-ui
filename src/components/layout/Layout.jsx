import React from 'react';
import Menu from '../Menu';
import Navbar from '../navbar/Navbar';
import { Outlet } from 'react-router-dom';
import "../../App.css"; 

const Layout = () => {
  return (
    <div className="app-container">
      {/* Left sidebar with menu */}
      <div className="sidebar">
        <div className="logo-container">
          <h1 className="logo">Hirix</h1>
        </div>
        <Menu />
      </div>
      
       {/* Main content area */}
       <div className="main-content">
        {/* Navbar Component */}
        <Navbar />
        
        {/* Page content will be rendered here */}
        <div className="page-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;