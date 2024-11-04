// PetDetails.js
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Modal from '../components/Modal'; // Impor komponen Modal
import '../styles/petdetails.css';

const PetDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const pet = location.state?.pet;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    // Tambahkan field lain yang diperlukan
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking data:', formData);
    // Lakukan tindakan booking (misalnya kirim data ke server)
    setIsModalOpen(false); // Sembunyikan modal setelah submit
  };

  if (!pet) {
    return (
      <div>
        <p>Pet details not available.</p>
        <button onClick={() => navigate('/')}>Back to Home</button>
      </div>
    );
  }

  return (
    <div className="pet-details">
      <div className="details-container">
        <img src={pet.image} alt={pet.name} className="pet-image" />
        <div className="info-container">
          <h2>{pet.name}</h2>
          <p>{pet.description}</p>
          <p>Umur: {pet.age} years</p>
          <p>Berat: {pet.weight}</p>
          <p>Lokasi: {pet.location}</p>
          {/* <button onClick={() => setIsModalOpen(true)}>Book Now</button> */}

          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <h3>Booking Form</h3>
            <form onSubmit={handleSubmit}>
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                Address:
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                />
              </label>
              {/* Tambahkan field lain sesuai kebutuhan */}
              <button type="submit">Submit Booking</button>
            </form>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default PetDetails;
