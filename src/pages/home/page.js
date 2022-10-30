import React, { useContext } from "react";
import Layout from "../../components/layout";
import CountryContext from "../../context/country.context";

const HomePage = () => {
  const { countries } = useContext(CountryContext);
  return <Layout>You have {countries.length} countries!</Layout>;
};

export default HomePage;
