import React from 'react';
import Header from '../components/Header';
import Gallery from './GalleryShow';
import Owner from './Owner';
import Service from './Service';
import Testimoni from './Testimoni';

const Home = () => {
    return (
        <div className="App">
            <Header />
            <Gallery />
            <Service />
            <Owner />
            <Testimoni />
        </div>
    );
};

export default Home;
