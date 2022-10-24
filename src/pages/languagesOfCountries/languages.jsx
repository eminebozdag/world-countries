import React, { useContext } from "react";
import { DataContext } from "../../components/bar/bar-context";
import DemoBar from "../../components/bar/demobar";
import "./languages.css";

const Languages = () => {
  const { data } = useContext(DataContext);

  return (
    <div className="languages-container">
      <DemoBar />
    </div>
  );
};
export default Languages;
