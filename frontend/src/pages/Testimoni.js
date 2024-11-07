import React, { useEffect } from 'react'
import '../styles/testimonial.css'

const testimonials = [
  {
    name: 'Blanche',
    job: 'Chef',
    image: '/images/client/img1.jpg',
    text: 'It was so easy to adopt a pet that I like, this app gives tons of list and we can also search it!'
  },
  {
    name: 'Ricky',
    job: 'Teacher',
    image: '/images/client/img2.jpg',
    text: 'Personally, this is the best app ever especially when it comes to adoption pet, booyah!'
  },
  {
    name: 'Rikka',
    job: 'Freelance',
    image: '/images/client/img3.jpg',
    text: 'Its not just about pet, but also about education and some other service that make this app were different!'
  },
  {
    name: 'Dono',
    job: 'Athlete',
    image: '/images/client/img4.jpg',
    text: 'Easy to process, fast to get, are the best words that I can say so far about this adoption app!'
  },
  {
    name: 'Blanche',
    job: 'Dentist',
    image: '/images/client/img5.jpg',
    text: 'Unlike the other adoption app, this app provides high quality of their services. Highly recommend this app.'
  }
]

const TestimonialSlider = () => {
  useEffect(() => {
    const { Swiper } = window // Accessing Swiper from the window object directly

    const swiper = new Swiper('.testimonial-slider', {
      // Initialize swiper directly
      grabCursor: true,
      slidesPerView: 2,
      spaceBetween: 30,
      pagination: {
        el: '.testimonial-pagination',
        clickable: true
      },
      autoplay: {
        delay: 2000
      }
    })

    // Optional: Cleanup function to destroy the swiper instance when the component unmounts
    return () => swiper.destroy()
  }, []) // Empty dependency array to run this effect only once

  return (
    <div className='testimonial-background'>
      <section className='testimonial-section'>
        <div className='testimonial-wrapper'>
          <div className='testimonial-header'>
            <h2 className='testimonial-title'>What our clients say</h2>
          </div>
          <div className='testimonial-content'>
            <div className='swiper testimonial-slider'>
              <div className='swiper-wrapper'>
                {testimonials.map((testimonial, index) => (
                  <div className='swiper-slide testimonial-item' key={index}>
                    <div className='testimonial-info'>
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className='testimonial-img'
                      />
                      <div className='testimonial-name-job'>
                        <h3 className='testimonial-name'>{testimonial.name}</h3>
                        <span className='testimonial-job'>
                          {testimonial.job}
                        </span>
                      </div>
                    </div>
                    <p className='testimonial-text'>{testimonial.text}</p>
                    <div className='testimonial-rating'>
                      {[...Array(5)].map((_, starIndex) => (
                        <i
                          key={starIndex}
                          className='fas fa-star testimonial-star'
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className='testimonial-pagination swiper-pagination' />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TestimonialSlider
