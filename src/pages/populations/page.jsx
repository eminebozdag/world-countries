import React, { useContext } from "react";
import DemoBar from "../../components/bar/demobar";
import Layout from "../../components/layout";
import CountryContext from "../../context/country.context";
const PopulationPage = () => {
  const { countries } = useContext(CountryContext);
  return (
    <Layout>
      Populations {countries.length}
      <DemoBar />
    </Layout>
  );
};

export default PopulationPage;
