import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../../components/loading/loading";
import Search from "../../components/search/search";
import "./countries.css";
import Country from "./country/country";
const Countries = () => {
  const [items, setItems] = useState([]);
  const [spinner, setSpinner] = useState(true);
  const [filteredItems, setfilteredItems] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const API_URL = "https://restcountries.com/v2/all";
    try {
      const response = await axios.get(API_URL);
      const data = await response.data;
      setItems(data);
      setfilteredItems(data);
      setSpinner(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = (searchInput) => {
    let result = items.filter((country) => {
      return country.name.includes(searchInput);
    });
    setfilteredItems(result);
  };

  return (
    <div>
      {spinner ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div className="countries-search-container">
          <Search onSearch={handleSearch} />

          <div className="countries-container">
            {filteredItems.map((country) => (
              <Country data={country} key={country.name} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default Countries;
