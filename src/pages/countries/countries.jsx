import React, { useContext } from "react";
import { CountryItemsContext } from "../../App";
import DataContext from "../../components/bar/bar-context";
import Loading from "../../components/loading/loading";
import Search from "../../components/search/search";
import "./countries.css";
import Country from "./country/country";
const Countries = () => {
  const { setData } = useContext(DataContext);
  const { fetchedData, loading, filteredItems, setfilteredItems } =
    useContext(CountryItemsContext);

  const handleSearch = (text) => {
    const lowerText = text.toLowerCase();
    const result = fetchedData.filter(
      (country) =>
        country.name?.toLowerCase().includes(lowerText) ||
        country.capital?.toLowerCase().includes(lowerText) ||
        country.languages.filter((language) =>
          language.name.toLowerCase().includes(lowerText)
        ).length > 0
    );
    setfilteredItems(result);
  };

  return (
    <div>
      {loading ? (
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
