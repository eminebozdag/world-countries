import React from "react";
import "./search.css";

const Search = (props) => {
  const handleChange = (e) => {
    props.parentCallback(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className="search-container">
      <input
        className="search-input"
        type="text"
        name="searchInput"
        onChange={handleChange}
        placeholder="Search countries by name, city and language"
      />
    </div>
  );
};
export default Search;
