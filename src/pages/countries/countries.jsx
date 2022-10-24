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

  useEffect(() => {
    init();
  });

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

  const handleSearch = (text) => {
    const lowerText = text.toLowerCase();
    const result = items.filter(
      (country) =>
        country.name?.toLowerCase().includes(lowerText) ||
        country.capital?.toLowerCase().includes(lowerText) ||
        country.languages.filter((language) =>
          language.name.toLowerCase().includes(lowerText)
        ).length > 0
    );
    setfilteredItems(result);
  };

  const getCountryPopution = () => {
    const countryPopulation = {};
    items.forEach((country) => {
      countryPopulation[country.name] = country.population;
    });
    return countryPopulation;
  };

  const getLanguageUsages = () => {
    const languageUsages = {};
    items.forEach((country) => {
      country.languages.forEach((language) => {
        if (!languageUsages[language.name]) languageUsages[language.name] = 0;
        languageUsages[language.name]++;
      });
    });
    return languageUsages;
  };

  const findMostTenUsages = (usages) => {
    const arr = Object.keys(usages).map((name) => {
      return {
        name,
        count: usages[name],
      };
    });

    arr.sort(function (a, b) {
      if (a.count < b.count) return -1;
    });

    return arr.reverse().slice(0, 10);
  };

  const init = () => {
    const langUsages = getLanguageUsages();
    const mostTenLangs = findMostTenUsages(langUsages);
    localStorage.setItem("mostTenLanguages", JSON.stringify(mostTenLangs));
    const countryPops = getCountryPopution();
    const mostTenCountries = findMostTenUsages(countryPops);
    localStorage.setItem(
      "mostTenPopulations",
      JSON.stringify(mostTenCountries)
    );
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
            {filteredItems.length > 0 ? (
              filteredItems.map((country) => (
                <Country data={country} key={country.name} />
              ))
            ) : (
              <div className="warning-div">
                <p className="warning-p">Unfortunately, </p>
                <p className="warning-p">there is no such result.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
export default Countries;
