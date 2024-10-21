import React, { useState } from 'react';
import Filter from '../components/Filter';
import PetList from '../components/PetList';
import Search from '../components/Search';
import '../styles/pets.css';

// Data for the pets
const petsData = [
  { type: 'Kucing', name: 'Meow', description: 'Kucing lucu dan menggemaskan.', image: '/images/cat.jpg' },
  { type: 'Kucing', name: 'Mittens', description: 'Kucing imut dengan bulu halus.', image: '/images/cat/cat2.jpeg' },
  { type: 'Anjing', name: 'Woof', description: 'Anjing setia dan ramah.', image: '/images/dog/dog.jpeg' },
  { type: 'Anjing', name: 'Buddy', description: 'Anjing yang penuh energi.', image: '/images/dog/dog2.jpeg' },
  { type: 'Anjing', name: 'Anthony', description: 'Anjing yang mungil.', image: '/images/dog/dog3.jpeg' },
  { type: 'Rabbit', name: 'Lala', description: 'Kelinci yang imut dan lucu.', image: '/images/rabbit/rabbit.jpeg' },
  { type: 'Rabbit', name: 'Doraria', description: 'Kelinci yang suka makan wortel.', image: '/images/rabbit/rabbit2.jpeg' },
  { type: 'Monkey', name: 'Victor', description: 'Monyet yang suka makan pisang.', image: '/images/monkey/monkey.jpeg' },
  { type: 'Monkey', name: 'Mike', description: 'Monyet yang suka manjat.', image: '/images/monkey/monkey2.jpeg' },
];

function Pets() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTypes, setFilteredTypes] = useState([]);

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

  return (
    <div className="main-container">
      <Filter selectedTypes={filteredTypes} onFilterChange={handleFilterChange} onReset={resetFilters} />
      <div className="pet-list">
        <Search searchTerm={searchTerm} onSearchChange={handleSearchChange} />
        <PetList pets={filteredPets} />
      </div>
    </div>
  );
}

export default Pets;
