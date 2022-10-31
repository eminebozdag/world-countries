import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DataContext from "./context/bar.context";
import CountryContext from "./context/country.context";
import ComponentMethod from "./methods/component.method";
import pages from "./pages/pages.config";
import CountryService from "./services/countries.service";

function App() {
  const [countries, setCountries] = useState([]);
  const [mostTenLangs, setMostTenLangs] = useState([]);
  const [mostTenCountries, setMostTenCountries] = useState([]);

  useEffect(() => {
    const fetcher = async () => {
      if (countries.length > 0) {
        return;
      }

      const service = new CountryService();
      const allCountries = await service.getAllCountries();

      console.log("fetched!");
      setCountries(allCountries || []);
    };

    fetcher();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const methods = new ComponentMethod();

    const getPopulations = () => {
      const populations = methods.getCountryPopution(countries);
      const orderedPopulation = methods.findMostTenUsages(populations);
      setMostTenCountries(orderedPopulation);
    };

    const getLanguages = () => {
      const languages = methods.getLanguageUsages(countries);
      const orderedLanguages = methods.findMostTenUsages(languages);
      setMostTenLangs(orderedLanguages);
    };

    getPopulations();
    getLanguages();
  }, [countries]);

  return (
    <CountryContext.Provider value={{ countries }}>
      <DataContext.Provider value={{ mostTenLangs, mostTenCountries }}>
        <BrowserRouter>
          <Routes>
            {pages.map((page) => {
              return (
                <Route
                  key={page.title}
                  path={page.route}
                  exact={page.exact}
                  element={<page.Component />}
                />
              );
            })}
          </Routes>
        </BrowserRouter>
      </DataContext.Provider>
    </CountryContext.Provider>
  );
}

export default App;
