// Pets.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Filter from '../components/Filter';
import PetList from '../components/PetList';
import Search from '../components/Search';
import '../styles/pets.css';

// Data for the pets
const petsData = [
  {
    type: 'Kucing',
    name: 'Meow',
    description: 'Kucing lucu dan menggemaskan.',
    image: '/images/cat.jpg',
    age: 2, // usia dalam tahun
    weight: '4 kg', // berat
    location: 'Medan' // lokasi
  },
  {
    type: 'Kucing',
    name: 'Mittens',
    description: 'Kucing imut dengan bulu halus.',
    image: '/images/cat/cat2.jpeg',
    age: 1,
    weight: '3.5 kg',
    location: 'Jakarta'
  },
  {
    type: 'Anjing',
    name: 'Woof',
    description: 'Anjing setia dan ramah.',
    image: '/images/dog/dog.jpeg',
    age: 3,
    weight: '10 kg',
    location: 'Surabaya'
  },
  {
    type: 'Anjing',
    name: 'Buddy',
    description: 'Anjing yang penuh energi.',
    image: '/images/dog/dog2.jpeg',
    age: 4,
    weight: '12 kg',
    location: 'Bandung'
  },
  {
    type: 'Anjing',
    name: 'Anthony',
    description: 'Anjing yang mungil.',
    image: '/images/dog/dog3.jpeg',
    age: 2,
    weight: '5 kg',
    location: 'Yogyakarta'
  },
  {
    type: 'Kelinci',
    name: 'Lala',
    description: 'Kelinci yang imut dan lucu.',
    image: '/images/rabbit/rabbit.jpeg',
    age: 1,
    weight: '1 kg',
    location: 'Malang'
  },
  {
    type: 'Kelinci',
    name: 'Doraria',
    description: 'Kelinci yang suka makan wortel.',
    image: '/images/rabbit/rabbit2.jpeg',
    age: 2,
    weight: '1.5 kg',
    location: 'Semarang'
  },
  {
    type: 'Monyet',
    name: 'Victor',
    description: 'Monyet yang suka makan pisang.',
    image: '/images/monkey/monkey.jpeg',
    age: 5,
    weight: '8 kg',
    location: 'Bali'
  },
  {
    type: 'Monyet',
    name: 'Mike',
    description: 'Monyet yang suka manjat.',
    image: '/images/monkey/monkey2.jpeg',
    age: 4,
    weight: '7 kg',
    location: 'Lombok'
  },
];

function Pets() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTypes, setFilteredTypes] = useState([]);
  const navigate = useNavigate();

  // Filter pets based on search and type
  const filteredPets = petsData.filter(pet => {
    const matchesSearch = pet.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filteredTypes.length === 0 || filteredTypes.includes(pet.type);
    return matchesSearch && matchesType;
  });

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle filter checkbox change
  const handleFilterChange = (type) => {
    setFilteredTypes(prev =>
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  // Reset filters
  const resetFilters = () => {
    setFilteredTypes([]);
  };

  const handlePetClick = (pet) => {
    navigate(`/pets/${pet.name}`, { state: { pet } });
  };

  return (
    <div>
      <Search searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <div className="main-container">
        <Filter selectedTypes={filteredTypes} onFilterChange={handleFilterChange} onReset={resetFilters} />
        <div className="pet-list">
          <PetList pets={filteredPets} onPetClick={handlePetClick} />
        </div>
      </div>
    </div>
  );
}

export default Pets;
