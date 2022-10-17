import axios from "axios";
import React, { useEffect, useState } from "react";
import Search from "../../components/search/search";
import "./countries.css";
import Country from "./country/country";
const Countries = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    const API_URL = "https://restcountries.com/v2/all";
    try {
      const response = await axios.get(API_URL);
      const data = await response.data;
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="countries-search-container">
      <Search />
      <div className="countries-container">
        {data.map((country) => (
          <Country data={country} />
        ))}
      </div>
    </div>
  );
};
export default Countries;
