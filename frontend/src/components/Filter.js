// Filter.js
import React from 'react';

const Filter = ({ selectedTypes, onFilterChange, onReset }) => {
  const petTypes = ['Anjing', 'Kelinci', 'Kucing', 'Monyet'];

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