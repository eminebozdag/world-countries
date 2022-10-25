import React, { createContext, useEffect, useState } from "react";
import upIcon from "../src/assets/icons/up-arrow.png";
import "./App.css";
import Body from "./components/body/body";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import useFetch from "./hooks/useFetch";

export const CountryItemsContext = createContext();

function App() {
  const [showButton, setShowButton] = useState(false);
  const { fetchedData, loading, filteredItems, setfilteredItems } = useFetch(
    "https://restcountries.com/v2/all"
  );
  const value = { fetchedData, loading, filteredItems, setfilteredItems };

  useEffect(() => {
    const handleScrollButtonVisibility = () => {
      window.pageYOffset > 300 ? setShowButton(true) : setShowButton(false);
    };

    window.addEventListener("scroll", handleScrollButtonVisibility);

    return () => {
      window.removeEventListener("scroll", handleScrollButtonVisibility);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      <Header />
      <CountryItemsContext.Provider value={value}>
        <Body />
      </CountryItemsContext.Provider>
      <Footer />
      {showButton && (
        <input
          type="image"
          className="scroll-button"
          src={upIcon}
          alt="scroll"
          onClick={handleScrollToTop}
        />
      )}
    </div>
  );
}

export default App;
