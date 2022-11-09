import React, { useContext, useEffect, useState } from "react";
import DemoBar from "../../components/bar/demobar";
import Layout from "../../components/layout/layout";
import CountryContext from "../../context/country.context";
import "./page.css";

const PopulationPage = () => {
  const { countries } = useContext(CountryContext);
  const [populations, setPopulations] = useState([]);

  useEffect(() => {
    const getMostTenCountryPopulation = () => {
      const countryPopulation = {};

      countries.forEach((country) => {
        countryPopulation[country.name] = country.population;
      });

      const popArr = Object.keys(countryPopulation).map((name) => {
        return {
          name,
          count: countryPopulation[name],
        };
      });

      popArr.sort(function (a, b) {
        if (a.count < b.count) return -1;
      });
      const result = popArr.reverse().slice(0, 10);
      setPopulations(result);
    };

    getMostTenCountryPopulation();
  }, [countries]);

  return (
    <Layout>
      <div className="population-container">
        <DemoBar
          data={populations.map((lang) => {
            return { type: lang.name, value: lang.count };
          })}
        />
      </div>
    </Layout>
  );
};

export default PopulationPage;
