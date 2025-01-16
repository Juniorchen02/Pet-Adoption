import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import '../styles/navbar.css';
 
const Navbar = () => {
  // Atur manual apakah pengguna dianggap login atau tidak
  const [isLoggedIn, setIsLoggedIn] = useState(false);
 
  const handleLogout = () => {
    // Proses logout sederhana, hanya mengubah state
    setIsLoggedIn(false);
    window.location.href = "/signin"; // Redirect ke halaman login
  };
 
  return (
    <nav className="navbar">
      <h1 className="logo">Adopet</h1>
      <div className="nav-links">
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/pets" className={({ isActive }) => (isActive ? "active" : "")}>
              Pets
            </NavLink>
          </li>
          <li>
            <NavLink to="/service" className={({ isActive }) => (isActive ? "active" : "")}>
              Service
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
              About Us
            </NavLink>
          </li>
          {isLoggedIn ? (
            <>
              <li>
                <NavLink to="/profile">
                  <button className="btn-primary">Profile</button>
                </NavLink>
              </li>
              <li>
                <button className="btn-secondary" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/signup">
                  <button className="btn-primary">Register</button>
                </NavLink>
              </li>
              <li>
                <NavLink to="/signin">
                  <button className="btn-secondary">Login</button>
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};
 
export default Navbar;
 