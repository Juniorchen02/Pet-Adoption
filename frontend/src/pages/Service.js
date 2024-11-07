import React from 'react'
import '../styles/service.css'

const services = [
  {
    icon: 'fa-solid fa-dog',
    title: 'Adoption Pet',
    description: 'Helps you find the animal you like the most.',
  },
  {
    icon: 'fa-solid fa-hand-holding-heart',
    title: 'Support & Donation',
    description:
      'Support to volunteer or make a donation to support animal shelters.',
  },
  {
    icon: 'fa-solid fa-truck-pickup',
    title: 'Free Delivery',
    description: 'Pick-up facility for lost or adopted animals.',
  },
  {
    icon: 'fa-solid fa-location-crosshairs',
    title: 'Tracking Pet',
    description: 'Helps you track down lost or runaway pets.',
  },
  {
    icon: 'fa-solid fa-notes-medical',
    title: 'Medical Support',
    description:
      'Provides a means of finding a doctor for health tests on your animals.',
  },
  {
    icon: 'fa-solid fa-graduation-cap',
    title: 'Pet Education',
    description:
      'Provide education on animal adoption or how to care for animals.',
  },
]

const Service = () => {
  return (
    <section className="service-section">
      <div className="row-service">
        <h2 className="section-heading-service">Our Services</h2>
      </div>
      <div className="row-service">
        {services.map((service, index) => (
          <div className="column-service" key={index}>
            <div className="card-service">
              <div className="icon-wrapper-service">
                <i className={service.icon} />
              </div>
              <h3 className="h3-service">{service.title}</h3>
              <p className="p-service">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Service
