import React from "react";
import "./search.css";

const Search = ({ onSearch }) => {
  return (
    <div className="search-container">
      <input
        className="search-input"
        type="text"
        name="searchInput"
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Search countries by name, city and language"
      />
    </div>
  );
};
export default Search;
