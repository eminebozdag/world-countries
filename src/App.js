import React, { useEffect, useState } from "react";
import upIcon from "../src/assets/icons/up-arrow.png";
import "./App.css";
import Body from "./components/body/body";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
function App() {
  const [showButton, setShowButton] = useState(false);
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
      <Body />
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
