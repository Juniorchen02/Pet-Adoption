import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/header.css';

const Header = () => {
  return (
    <section className="header">
      <div className="text-box">
        <h1 className='h1-text'>Adopet - Adopt A Pet</h1>
        <p>The only place where you can find your very own pet!</p>
        <div className="button">
          <NavLink to="/pets">
            <button className="button-header" type="button">Find me!</button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Header;
