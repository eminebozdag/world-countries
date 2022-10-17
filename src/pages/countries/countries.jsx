import React from "react";
import Search from "../../components/search/search";
import "./countries.css";
import Country from "./country/country";
const Countries = () => {
  return (
    <div className="countries-search-container">
      <Search />
      <div className="countries-container">
        <Country />
        <Country />
        <Country />
        <Country />
      </div>
    </div>
  );
};
export default Countries;
