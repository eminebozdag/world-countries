import { createContext } from "react";

const DataContext = createContext({
  data: {
    mostTenLangs: [],
    mostTenCountries: [],
  },
});
export default DataContext;
