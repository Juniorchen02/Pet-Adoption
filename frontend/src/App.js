import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/NavBar'
import AboutUs from './pages/About'
import Home from './pages/Home'
import PetDetails from './pages/PetDetails'
import Pets from './pages/Pets'
import Profile from './pages/Profile'
import ServicePage from './pages/ServicePage'
import Login from './pages/SignIn'
import SignUp from './pages/SignUp'

// Route part
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pets" element={<Pets />} />
        <Route path="/pets/:name" element={<PetDetails />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
