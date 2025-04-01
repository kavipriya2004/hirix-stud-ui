import React from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes"; // Import Routes

const Layout = () => {
  const location = useLocation();
  const hideNavbarRoutes = ["/signin"]; // Hide navbar on sign-in page
  const showNavbar = !hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {showNavbar && <Navbar />}
      <AppRoutes />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Layout />
    </Router>
  );
};

export default App;
