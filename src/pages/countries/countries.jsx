import React, { useEffect, useState } from "react";
import Loading from "../../components/loading/loading";
import Search from "../../components/search/search";
import "./countries.css";
import Country from "./country/country";
const Countries = () => {
  const [items, setItems] = useState([]);
  const [spinner, setSpinner] = useState(true);
  const [inputWord, setInputWord] = useState("");

  useEffect(() => {
    getItemsFromLocaleStorage();
  }, []);

  const getItemsFromLocaleStorage = () => {
    const items = JSON.parse(localStorage.getItem("items"));
    if (items) {
      setItems(items);
    }
    setSpinner(false);
  };

  const handleCallback = (childData) => {
    setInputWord(childData);
  };

  return (
    <div>
      {spinner ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div className="countries-search-container">
          <Search parentCallback={handleCallback} />
          <h1>{inputWord}</h1>
          <div className="countries-container">
            {items.map((country) => (
              <Country data={country} key={country.name} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default Countries;
