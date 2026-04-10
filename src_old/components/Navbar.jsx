import { NavLink } from 'react-router-dom';
import { Gamepad2 } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <NavLink to="/" className="navbar-logo">
          <Gamepad2 color="var(--color-primary)" size={32} />
          <span className="gradient-text">Pinball On Perry</span>
        </NavLink>
        <div className="navbar-links">
          <NavLink to="/" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
          <NavLink to="/games" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Games</NavLink>
          <NavLink to="/events" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Events</NavLink>
          <NavLink to="/staff" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Staff Portal</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
