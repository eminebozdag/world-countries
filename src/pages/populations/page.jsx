import React, { useContext } from "react";
import DemoBar from "../../components/bar/demobar";
import Layout from "../../components/layout";
import DataContext from "../../context/bar.context";
import "./page.css";

const PopulationPage = () => {
  const { mostTenCountries } = useContext(DataContext);
  return (
    <Layout>
      <div className="population-container">
        <DemoBar
          data={mostTenCountries.map((lang) => {
            return { type: lang.name, value: lang.count };
          })}
        />
      </div>
    </Layout>
  );
};

export default PopulationPage;
