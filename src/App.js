import "./App.css";
import Body from "./components/body/body";
import Header from "./components/header/header";
import Search from "./components/search/search";
function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Body />
    </div>
  );
}

export default App;
