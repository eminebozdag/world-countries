import React, { useContext } from "react";
import DataContext from "../../components/bar/bar-context";
import DemoBar from "../../components/bar/demobar";
import "./languages.css";

const Languages = () => {
  const { data } = useContext(DataContext);
  console.log(data);
  return <div></div>;
  return (
    <div className="languages-container">
      <DemoBar
        data={data?.mostTenLangs.map((lang) => {
          return { type: lang.name, value: lang.count };
        })}
      />
    </div>
  );
};
export default Languages;
