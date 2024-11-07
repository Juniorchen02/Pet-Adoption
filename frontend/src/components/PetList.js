import React from 'react'

const PetList = ({ pets, onPetClick }) => {
  return (
    <div className='container'>
      {pets.length === 0
<<<<<<< HEAD
        ?
        (
        <p>No pets found.</p>
=======
        ? 
        (
            <p>No pets found.</p>
>>>>>>> 1d0b4763e34b2a20d902d4db1df9e4cd88518e86
          ) : (
        pets.map((pet) => (
          <div
            key={pet.id}
            className='pet-card'
            onClick={() => onPetClick(pet)}
          >
            <img src={pet.image} alt={pet.name} />
            <div className='pet-info'>
              <h3>{pet.name}</h3>
              <p>{pet.description}</p>
            </div>
              </div>
            ))
      )}
    </div>
  )
}

export default PetList
