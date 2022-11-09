import React, { useEffect, useState } from "react";
import BackToTopButton from "../back-top-button/backToTopButton";
import Footer from "../footer/footer";
import Header from "../header/header";
const Layout = ({ children }) => {
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

  return (
    <div>
      <Header />
      <div className="body">{children}</div>
      <Footer />
      {showButton && <BackToTopButton />}
    </div>
  );
};

export default Layout;
