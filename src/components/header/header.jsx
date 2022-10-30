import React from "react";
import { Link } from "react-router-dom";
import searchIcon from "../../assets/icons/loupe.png";
import langIcon from "../../assets/icons/translate.png";
import popIcon from "../../assets/icons/user.png";
import "./header.css";

const Header = () => {
  return (
    <div>
      <div className="header-container">
        <div className="title-container">
          <h1>World Countries Data</h1>
          <h3>Currently, we have 250 countries</h3>
        </div>
      </div>
      <div className="links-container-div">
        <div className="links-div">
          <Link to="/home">
            <img src={searchIcon} alt="search" />
          </Link>
          <span className="icon-span">search</span>
        </div>

        <div className="links-div">
          <Link to="/languages">
            <img src={langIcon} alt="search" />
          </Link>
          <span className="icon-span">language</span>
        </div>

        <div className="links-div">
          <Link to="/populations">
            <img src={popIcon} alt="search" />
          </Link>
          <span className="icon-span">population</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
