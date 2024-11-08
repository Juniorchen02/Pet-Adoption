// Search.js
import React from 'react';

const Search = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        value={searchTerm}
        onChange={onSearchChange}
        placeholder="Cari pet..."
      />
    </div>
  );
};

export default Search;

// Search.js
import React from 'react';

const Search = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        value={searchTerm}
        onChange={onSearchChange}
        placeholder="Cari pet..."
      />
    </div>
  );
};

export default Search;
