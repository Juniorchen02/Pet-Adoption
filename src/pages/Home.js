import React from 'react';
import Header from '../components/Header';
import Gallery from './GalleryShow';
import Owner from './Owner';
import Service from './Service';
import TestimonialSlider from './Testimoni';

const Home = () => {
    return (
        <div className="App">
            <Header />
            <Gallery />
            <Service />
            <Owner />
            <TestimonialSlider />
        </div>
    );
};

export default Home;
