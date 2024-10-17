import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/NavBar';
import AboutUs from './pages/About';
import Home from './pages/Home';
import Pets from './pages/Pets';
import Service from './pages/ServicePage';



// Route part
const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pets" element={<Pets />} />
                <Route path="/service" element={<Service />} />
                <Route path="/about" element={<AboutUs />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
