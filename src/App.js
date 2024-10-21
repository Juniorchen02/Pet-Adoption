import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/NavBar';
import AboutUs from './pages/About';
import Home from './pages/Home';
import Pets from './pages/Pets';
<<<<<<< HEAD
import Service from './pages/ServicePage';
import Login from './pages/SignIn';
import SignUp from './pages/SignUp';


=======
import Service from './pages/Service';
>>>>>>> e5f5482c48145a6c8c7e0359598f736fde03e1c2

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
                <Route path="/signin" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
