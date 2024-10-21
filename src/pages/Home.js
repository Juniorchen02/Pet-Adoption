import React from 'react';
import Header from '../components/Header';
import Gallery from './GalleryShow';
import Owner from './Owner';
import ServicePage from './ServicePage';
import Testimoni from './Testimoni';

const Home = () => {
    return (
        <div className="App">
            <Header />
            <Gallery />
            <ServicePage />
            <Owner />
            <Testimoni />
        </div>
    );
};

export default Home;
