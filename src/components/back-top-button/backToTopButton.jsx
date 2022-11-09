import React from "react";
import upIcon from "../../assets/icons/up-arrow.png";
const BackToTopButton = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <input
      type="image"
      className="scroll-button"
      src={upIcon}
      alt="scroll"
      onClick={handleScrollToTop}
    />
  );
};
export default BackToTopButton;
