import React, { useContext } from "react";
import Layout from "../../components/layout";
import CountryContext from "../../context/country.context";

const PopulationPage = () => {
  const { countries } = useContext(CountryContext);
  return <Layout>Populations {countries.length}</Layout>;
};

export default PopulationPage;
