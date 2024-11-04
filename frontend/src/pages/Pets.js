// Pets.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Filter from '../components/Filter';
import PetList from '../components/PetList';
import Search from '../components/Search';
import AddPetModal from '../components/AddPetModal';
import EditPetModal from '../components/EditPetModal'; // Import the edit modal
import '../styles/pets.css';

function Pets() {
  const [petsData, setPetsData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTypes, setFilteredTypes] = useState([]);
  const [showAddPetForm, setShowAddPetForm] = useState(false);
  const [showEditPetForm, setShowEditPetForm] = useState(false);
  const [currentPet, setCurrentPet] = useState(null);
  const navigate = useNavigate();

  // Fetch pets data from API
  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await fetch('http://localhost:5000/pets');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (Array.isArray(data)) {
          setPetsData(data);
        } else {
          console.error('Expected an array but got:', data);
          setPetsData([]);
        }
      } catch (error) {
        console.error('Error fetching pets:', error);
      }
    };
    
    fetchPets();
  }, []);

  const handleAddPet = async (newPet) => {
    // Add pet to the database
    try {
      const response = await fetch('http://localhost:5000/pets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPet),
      });
      if (response.ok) {
        const addedPet = await response.json();
        setPetsData((prev) => [...prev, addedPet]);
      }
    } catch (error) {
      console.error('Error adding pet:', error);
    }
  };

  const handleEditPet = async (updatedPet) => {
    try {
      const response = await fetch(`http://localhost:5000/pet/${updatedPet.uuid}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedPet),
      });
      if (response.ok) {
        const editedPet = await response.json();
        setPetsData((prev) => prev.map(pet => pet.uuid === editedPet.uuid ? editedPet : pet));
        setShowEditPetForm(false);
      }
    } catch (error) {
      console.error('Error editing pet:', error);
    }
  };

  const handleDeletePet = async (petId) => {
    try {
      const response = await fetch(`http://localhost:5000/pet/${petId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setPetsData((prev) => prev.filter(pet => pet.uuid !== petId));
      }
    } catch (error) {
      console.error('Error deleting pet:', error);
    }
  };

  const filteredPets = petsData.filter(pet => {
    const matchesSearch = pet.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filteredTypes.length === 0 || filteredTypes.includes(pet.name);
    return matchesSearch && matchesType;
  });

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (name) => {
    setFilteredTypes(prev =>
      prev.includes(name) ? prev.filter(t => t !== name) : [...prev, name]
    );
  };

  const resetFilters = () => {
    setFilteredTypes([]);
  };

  const handlePetClick = (pet) => {
    navigate(`/pets/${pet.uuid}`, { state: { pet } });
  };

  const openEditModal = (pet) => {
    setCurrentPet(pet);
    setShowEditPetForm(true);
  };

  return (
    <div>
      <Search searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <button onClick={() => setShowAddPetForm(true)} className='addPet'>Add Pet</button>
      <AddPetModal 
        isOpen={showAddPetForm} 
        onClose={() => setShowAddPetForm(false)} 
        onAddPet={handleAddPet} 
      />
      <EditPetModal 
        isOpen={showEditPetForm} 
        onClose={() => setShowEditPetForm(false)} 
        onEditPet={handleEditPet} 
        pet={currentPet} 
      />
      <div className="main-container">
        <Filter selectedTypes={filteredTypes} onFilterChange={handleFilterChange} onReset={resetFilters} />
        <div className="pet-list">
          <PetList pets={filteredPets} onPetClick={handlePetClick} onEditPet={openEditModal} onDeletePet={handleDeletePet} />
        </div>
      </div>
    </div>
  );
}

export default Pets;
