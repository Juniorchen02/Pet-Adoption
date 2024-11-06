import React from 'react';
import '../styles/about.css';
import Team from './Team';

const About = () => {
  return (
    <section className="section__container about__container" id="about">
      <p className="section__subheader"></p>
      <h2 className="section__header">About Us</h2>

      <div className="about__row">
        <div className="about__image">
          <img className="about-img" src="/images/aboutus/about-1.jpg" alt="about" />
        </div>
        <div className="about__content">
        <span><img src="/images/icon/about-1-icon.png" alt="about-icon" /></span>
          <h4 className='about__content-h4'>Help you get to find the most pet you love</h4>
          <p>
            Find your favourite here in our application, giving you tons list of pets, choose which one you love!
          </p>
        </div>
      </div>

      <div className="about__row">
        <div className="about__image">
          <img className="about-img" src="/images/aboutus/about-2.jpg" alt="about" />
        </div>
        <div className="about__content">
        <span><img src="/images/icon/about-2-icon.png" alt="about-icon" /></span>
          <h4 className='about__content-h4'>Take care of your pet. Just in your hands</h4>
          <p>
            Our staff will gave you solution according to your pets problem such as healthy things, giving you the best solution that you will ever get!.
          </p>
        </div>
      </div>

      <div className="about__row">
        <div className="about__image">
          <img className="about-img" src="/images/aboutus/about-3.jpg" alt="about" />
        </div>
        <div className="about__content">
        <span><img src="/images/icon/about-3-icon.png" alt="about-icon" /></span>
          <h4 className='about__content-h4'>Education and groom your precious pet</h4>
          <p>
           Beside adopt a pet, we also offer you to keep your pet save and healthy by our service, we help you to get some pet doctor for your pet and also education about pet.
          </p>
        </div>
      </div>
      < Team />
    </section>
    
    
  );
};

export default About;
