import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/companies">Companies</Link></li>
        <li><Link to="/job-search">Job Search</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/notifications">Notifications</Link></li>
        <li><Link to="/settings">Settings</Link></li>
        <li><Link to="/support">Support</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
