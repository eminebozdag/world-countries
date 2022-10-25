import { createContext } from "react";

const DataContext = createContext({ data: {
    mostTenLangs: [],
    mostTenCountries: []
}, setData: (data) => {} });
export default DataContext;
