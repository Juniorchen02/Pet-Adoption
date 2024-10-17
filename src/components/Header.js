import React from 'react';
import '../styles/header.css';

const Header = () => {
  return (
    <section className="header">
      <div className="text-box">
        <h1 className='h1-text'>Adopet - Adopt A Pet</h1>
        <p>The only place where you can find your very own pet!</p>
        <div className="button">
          <button className="button-header" type="button">Subscribe</button>
          <button className="button-header" type="button">Find one!</button>
        </div>
      </div>
    </section>
  );
};

export default Header;
