import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Главная</Link></li>
        <li><Link to="/about">О нас</Link></li>
        <li><Link to="/me">UserInfo</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
