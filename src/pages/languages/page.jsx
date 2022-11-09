import React, { useContext, useEffect, useState } from "react";
import DemoBar from "../../components/bar/demobar";
import Layout from "../../components/layout/layout";
import CountryContext from "../../context/country.context";
import "./page.css";

const LanguagePage = () => {
  const { countries } = useContext(CountryContext);
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    const getMostTenLanguagesAndUsages = () => {
      const languageaAndUsages = {};

      countries.forEach((country) => {
        country.languages.forEach((language) => {
          if (!languageaAndUsages[language.name])
            languageaAndUsages[language.name] = 0;
          languageaAndUsages[language.name]++;
        });
      });

      const langArr = Object.keys(languageaAndUsages).map((name) => {
        return {
          name,
          count: languageaAndUsages[name],
        };
      });

      langArr.sort(function (a, b) {
        if (a.count < b.count) return -1;
      });

      const result = langArr.reverse().slice(0, 10);
      setLanguages(result);
    };

    getMostTenLanguagesAndUsages();
  }, [countries]);

  return (
    <Layout>
      <div className="languages-container">
        <DemoBar
          data={languages.map((lang) => {
            return { type: lang.name, value: lang.count };
          })}
        />
      </div>
    </Layout>
  );
};

export default LanguagePage;
