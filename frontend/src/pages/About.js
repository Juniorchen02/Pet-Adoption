import React from 'react'
import '../styles/about.css'
import Team from './Team'

const About = () => {
  return (
    <section className="section-container about-container" id="about">
      <p className="section-subheader" />
      <h2 className="section-header">About Us</h2>

      <div className="about-row">
        <div className="about-image">
          <img
            className="about-img"
            src="/images/aboutus/about-1.jpg"
            alt="about pet adoption"
          />
        </div>
        <div className="about-content">
          <span>
            <img src="/images/icon/about-1-icon.png" alt="help icon" />
          </span>
          <h4 className="about-content-h4">
            Help you get to find the most pet you love
          </h4>
          <p>
            Find your favourite here in our application, giving you tons list of
            pets, choose which one you love!
          </p>
        </div>
      </div>

      <div className="about-row">
        <div className="about-image">
          <img
            className="about-img"
            src="/images/aboutus/about-2.jpg"
            alt="pet care"
          />
        </div>
        <div className="about-content">
          <span>
            <img src="/images/icon/about-2-icon.png" alt="care icon" />
          </span>
          <h4 className="about-content-h4">
            Take care of your pet. Just in your hands
          </h4>
          <p>
            Our staff will give you solutions according to your pets' problems
            such as health care, providing you the best solutions you will ever
            get!
          </p>
        </div>
      </div>

      <div className="about-row">
        <div className="about-image">
          <img
            className="about-img"
            src="/images/aboutus/about-3.jpg"
            alt="education and grooming"
          />
        </div>
        <div className="about-content">
          <span>
            <img src="/images/icon/about-3-icon.png" alt="education icon" />
          </span>
          <h4 className="about-content-h4">
            Education and groom your precious pet
          </h4>
          <p>
            Besides adopting a pet, we also offer services to keep your pet safe
            and healthy. We help you find a pet doctor for your pet and provide
            educational resources about pet care.
          </p>
        </div>
      </div>

      <Team />
    </section>
  )
}

export default About
