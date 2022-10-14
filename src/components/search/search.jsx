import React from "react";
import "./search.css";

const Search = () => {
  return (
    <div className="search-container">
      <input
        className="search-input"
        type="text"
        placeholder="Search countries by name, city and language"
      />
    </div>
  );
};
export default Search;
