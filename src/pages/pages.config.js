import HomePage from "./home/page";
import LanguagePage from "./languages/page";
import PopulationPage from "./populations/page";

const pages = [
  {
    title: "Home",
    route: "/home",
    exact: true,
    Component: HomePage,
  },
  {
    title: "Languages",
    route: "/languages",
    exact: false,
    Component: LanguagePage,
  },
  {
    title: "Populations",
    route: "/populations",
    exact: false,
    Component: PopulationPage,
  },
];

export default pages;
