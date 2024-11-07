import React from 'react'
import Header from '../components/Header'
import Gallery from './GalleryShow'
import Service from './Service'
import Team from './Team'
import TestimonialSlider from './Testimoni'

const Home = () => {
  return (
    <div className='App'>
      <Header />
      <Gallery />
      <Service />
      <TestimonialSlider />
      <Team />
    </div>
  )
}

export default Home
