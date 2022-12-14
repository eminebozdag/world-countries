import React from "react";
import "./country.css";
const Country = (props) => {
  const { name, flag, capital, languages, population, currencies } = props.data;

  const formattedLanguages = languages
    .map((language) => language.name)
    .join(", ");

  const formattedCurrencies =
    currencies !== undefined &&
    currencies.map((currency) => currency?.name || "").join(", ");

  return (
    <div className="country-container">
      <div className="country-flag">
        <img src={flag} alt="flag" className="flag-img" />
      </div>
      <div className="country-info">
        <h2 className="country-info-name">{name}</h2>
        <p className="info-p">
          Capital: <span className="info-span">{capital}</span>
        </p>
        <p className="info-p">
          Language: <span className="info-span">{formattedLanguages}</span>
        </p>
        <p className="info-p">
          Population:{" "}
          <span className="info-span">
            {population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </span>
        </p>
        <p className="info-p">
          Currency: <span className="info-span">{formattedCurrencies}</span>
        </p>
      </div>
    </div>
  );
};
export default Country;
