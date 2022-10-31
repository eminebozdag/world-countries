import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CountryContext from "./context/country.context";
import pages from "./pages/pages.config";
import CountryService from "./services/countries.service";

function App() {
  const [countries, setCountries] = useState([]);

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

  return (
    <CountryContext.Provider value={{ countries }}>
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
    </CountryContext.Provider>
  );
}

export default App;
