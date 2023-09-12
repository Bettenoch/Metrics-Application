import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { NavLink } from 'react-router-dom';
import planet from './assets/planet.png';
import './NavBar.css';

const NavBar = () => (
  <header>
    <nav className="nav-container">
      <div className="logo-container">
        <img src={planet} alt="Logo" className="planet-logo" />
        <h1>space Traveller&apos;s Hub</h1>
      </div>
      <ul className="nav-items">
        <li className="li">
          <NavLink to="/" id="navlink" className={({ isActive }) => (isActive ? 'active' : '')}>Rocket&apos;s</NavLink>
        </li>
        <li className="li">
          <NavLink to="/Mission" id="navlink" className={({ isActive }) => (isActive ? 'active' : '')}>Mission&apos;s</NavLink>
        </li>
        <li className="li">
          <NavLink to="/MyProfile" id="navlink" className={({ isActive }) => (isActive ? 'active' : '')}>My Profile</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default NavBar;
