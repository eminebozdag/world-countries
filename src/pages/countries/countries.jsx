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
    getItemsFromLocaleStorage();
  }, []);

  const getItemsFromLocaleStorage = () => {
    const items = JSON.parse(localStorage.getItem("items"));
    if (items) {
      setItems(items);
      setfilteredItems(items);
    }
    setSpinner(false);
  };

  const handleSearch = (childData) => {
    setfilteredItems(childData);
    let result = items.filter((country) => {
      return country.name.includes(childData);
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
