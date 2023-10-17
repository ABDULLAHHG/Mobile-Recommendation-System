import React from 'react';
import './Navbar.css';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><a href="#" className="navbar-link">Home</a></li>
        <li className="navbar-item"><a href="#" className="navbar-link">About</a></li>
        <li className="navbar-item"><a href="#" className="navbar-link">Services</a></li>
        <li className="navbar-item"><a href="#" className="navbar-link">Contact</a></li>
        <li className="navbar-item"><a href="#" className="navbar-link">Login</a></li>
        <li className="navbar-item"><a href="Register.js" className="navbar-link">Register</a></li>

      </ul>
    </nav>
  );
};

export default Navbar;

