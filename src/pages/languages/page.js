import React, { useContext } from "react";
import Layout from "../../components/layout";
import CountryContext from "../../context/country.context";

const LanguagePage = () => {
  const { countries } = useContext(CountryContext);
  return (
    <Layout>
      Languages;
      {countries.map((country) => {
        return (
          <p>
            {country.name} has {country.languages.length} languages
          </p>
        );
      })}
    </Layout>
  );
};

export default LanguagePage;
