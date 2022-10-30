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
      <div className="pages-container">
        <Routes>
          <Route exact path="/" element={<Countries />} />
          <Route path="/languages" element={<Languages />} />
          <Route path="/populations" element={<Populations />} />
        </Routes>
      </div>
    </Router>
  );
};
export default Body;
