import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Countries from "../../pages/countries/countries";
import Languages from "../../pages/languagesOfCountries/languages";
import Populations from "../../pages/populationsOfCountries/populations";
import "./search.css";
const Search = () => {
  return (
    <Router>
      <div className="search-container">
        <div className="links-container-div">
          <div className="links-div">
            <Link to="/countries">Countries</Link>
          </div>

          <div className="links-div">
            <Link to="/languages">Languages</Link>
          </div>

          <div className="links-div">
            <Link to="/populations">Populations</Link>
          </div>
        </div>

        <Routes>
          <Route path="/countries" element={<Countries />} />
          <Route path="/languages" element={<Languages />} />
          <Route path="/populations" element={<Populations />} />
        </Routes>
      </div>
    </Router>
  );
};
export default Search;
