import React, { useContext, useEffect, useState } from "react";
import Layout from "../../components/layout";
import Search from "../../components/search/search";
import CountryContext from "../../context/country.context";
import Country from "./country/country";
import "./page.css";

const Countries = () => {
  const { countries } = useContext(CountryContext);
  const [filteredItems, setFilteredItems] = useState(countries);

  useEffect(() => {
    const setDefault = () => {
      if (filteredItems.length === 0) {
        setFilteredItems(countries);
      }
    };
    setDefault();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countries]);

  const handleSearch = (text) => {
    const lowerText = text.toLowerCase();
    const result = countries.filter(
      (country) =>
        country.name?.toLowerCase().includes(lowerText) ||
        country.capital?.toLowerCase().includes(lowerText) ||
        country.languages.filter((language) =>
          language.name.toLowerCase().includes(lowerText)
        ).length > 0
    );
    setFilteredItems(result);
  };

  return (
    <Layout>
      <div className="countries-search-container">
        <Search onSearch={handleSearch} />
        <p className="countries-current-count">
          Currently, we have {filteredItems.length} countries!
        </p>
        <div className="countries-container">
          {filteredItems.length > 0 ? (
            filteredItems.map((country) => (
              <Country data={country} key={country.name} />
            ))
          ) : (
            <div className="warning-div">
              <p className="warning-p">Try Again!</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Countries;
