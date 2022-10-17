import React from "react";
import upIcon from "../../assets/icons/up-arrow.png";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-text">
        <p>Copyright ©2022</p>
        <p>
          Designed and Built by <span>Emine Bozdağ</span>
        </p>
      </div>
      <input
        type="image"
        src={upIcon}
        alt="scroll"
        className="scroll-button"
        onClick={() => console.log("hello")}
      />
    </div>
  );
};
export default Footer;
