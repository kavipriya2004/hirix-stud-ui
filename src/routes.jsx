import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Companies from "./pages/Companies";
import JobSearch from "./pages/JobSearch";
import Profile from "./pages/Profile";
import Notifications from "./pages/Notifications";
import Settings from "./pages/Settings";
import Support from "./pages/Support";
import SignIn from "./pages/SignIn"; 
import Menu from "./components/Menu";


function AppRoutes() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/job-search" element={<JobSearch />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/support" element={<Support />} />
         <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
