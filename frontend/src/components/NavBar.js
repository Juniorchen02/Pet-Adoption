import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import '../styles/navbar.css';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const response = await fetch("http://localhost:5000/me", {
          method: "GET",
          credentials: "include",
        });

        if (response.ok) {
          const user = await response.json();
          setIsLoggedIn(true);
          setUsername(user.username);
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error("Error checking login status:", error);
        setIsLoggedIn(false);
      }
    };

    checkLoginStatus();
  }, []);

  const handleLogout = async () => {
    try {
      await fetch("http://localhost:5000/logout", {
        method: "POST",
        credentials: "include",
      });
      setIsLoggedIn(false);
      setUsername("");
      window.location.href = "/signin";
    } catch (error) {
      console.error("Error logging out:", error);
    }
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
            <li>
              <NavLink to="/profile">
                <button className="btn-primary">Profile</button> {/* Tombol Profile */}
              </NavLink>
            </li>
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
