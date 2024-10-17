import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import '../styles/navbar.css';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State for login status
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown visibility

  useEffect(() => {
    const storedUser = localStorage.getItem("user"); // Example using localStorage
    setIsLoggedIn(!!storedUser);
  }, []);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
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
            <li className="profile-dropdown">
              <button onClick={handleDropdownToggle}>
                Profile {isDropdownOpen && <span>&#9660;</span>}
              </button>
              {isDropdownOpen && (
                <ul className="dropdown-menu">
                  <li>
                    <NavLink to="/profile">View Profile</NavLink>
                  </li>
                  <li>
                    <a href="/logout">Logout</a>
                  </li>
                </ul>
              )}
            </li>
          ) 
          : (
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
          )
          }
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
