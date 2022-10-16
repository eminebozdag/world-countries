import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import searchIcon from "../../assets/icons/loupe.png";
import langIcon from "../../assets/icons/translate.png";
import popIcon from "../../assets/icons/user.png";
import Countries from "../../pages/countries/countries";
import Languages from "../../pages/languagesOfCountries/languages";
import Populations from "../../pages/populationsOfCountries/populations";
import "./body.css";
const Body = () => {
  return (
    <Router>
      <div className="search-container">
        <div className="links-container-div">
          <div className="links-div">
            <Link to="/countries">
              <img src={searchIcon} alt="search" />
            </Link>
            <span>search</span>
          </div>

          <div className="links-div">
            <Link to="/languages">
              <img src={langIcon} alt="search" />
            </Link>
            <span>language</span>
          </div>

          <div className="links-div">
            <Link to="/populations">
              <img src={popIcon} alt="search" />
            </Link>
            <span>population</span>
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
export default Body;
