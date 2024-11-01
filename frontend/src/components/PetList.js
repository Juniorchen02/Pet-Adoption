// PetList.js
import React from 'react';

const PetList = ({ pets, onPetClick }) => {
  return (
    <div className="container">
      {pets.length === 0 ? <p>No pets found.</p> : pets.map((pet, index) => (
        <div key={index} className="pet-card" onClick={() => onPetClick(pet)}>
          <img src={pet.image} alt={pet.name} />
          <div className="pet-info">
            <h3>{pet.name}</h3>
            <p>{pet.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PetList;
