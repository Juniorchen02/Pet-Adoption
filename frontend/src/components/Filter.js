import React, { useEffect, useState } from 'react';

const Filter = ({ selectedTypes, onFilterChange, onReset }) => {
  const [petTypes, setPetTypes] = useState([]);

  useEffect(() => {
    const fetchPetTypes = async () => {
      try {
        const response = await fetch('http://localhost:5000/pet-types'); // Ganti dengan URL yang sesuai
        const data = await response.json();
        setPetTypes(data);
      } catch (error) {
        console.error('Failed to fetch pet types:', error);
      }
    };

    fetchPetTypes();
  }, []);

  return (
    <div className="filter-container">
      <h4>Tipe:</h4>
      {petTypes.map(type => (
        <div key={type} className="filter-item">
          <input
            type="checkbox"
            id={type}
            value={type}
            checked={selectedTypes.includes(type)}
            onChange={() => onFilterChange(type)}
          />
          <label htmlFor={type}>{type}</label>
        </div>
      ))}
      <button className="reset-button" onClick={onReset}>Reset</button>
    </div>
  );
};

export default Filter;
