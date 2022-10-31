import React, { useContext } from "react";
import DemoBar from "../../components/bar/demobar";
import Layout from "../../components/layout";
import DataContext from "../../context/bar.context";
import "./page.css";

const LanguagePage = () => {
  const { mostTenLangs } = useContext(DataContext);

  return (
    <Layout>
      <div className="languages-container">
        <DemoBar
          data={mostTenLangs.map((lang) => {
            return { type: lang.name, value: lang.count };
          })}
        />
      </div>
    </Layout>
  );
};

export default LanguagePage;
