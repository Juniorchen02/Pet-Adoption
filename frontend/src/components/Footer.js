import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-row'>
        <div className='footer-col'>
          <h1 className='footer-h1'>Adopet</h1>
          <p className='footer-p'>
            Adopet is an animal adoption app created so that everyone can find
            an animal they love, love and care for wholeheartedly. Where the heart
            grows is where the fun is.
          </p>
        </div>
        <div className='footer-col'>
          <h3>
            Our Office
            <div className='underline'>
              <span></span>
            </div>
          </h3>
          <p>Medan</p>
          <p>Sumatera Utara, Indonesia</p>
          <p>Jl. Majubersama No. 25D</p>
          <p className='footer-email-id'>adopetcare@gmail.com</p>
          <h4>+621234543233</h4>
        </div>
        <div className='footer-col'>
          <h3>
            Links
            <div className='underline'>
              <span></span>
            </div>
          </h3>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/pets'>Pets</Link>
            </li>
            <li>
              <Link to='/service'>Services</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
          </ul>
        </div>
        <div className='footer-col'>
          <h3>
            Find us
            <div className='underline'>
              <span></span>
            </div>
          </h3>
          <div className='social-icons'>
            <i className='fab fa-facebook-f'></i>
            <i className='fab fa-whatsapp'></i>
            <i className='fab fa-pinterest'></i>
            <i className='fab fa-twitter'></i>
          </div>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>Adopet @ 2024 - All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
