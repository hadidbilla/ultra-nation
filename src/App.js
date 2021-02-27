import { useEffect, useState } from "react";
import "./App.css";
import Country from "./components/Country/Country";
import New from "./components/New/New";

function App() {
  const [countries, setCountries] = useState([]);
  const [newCountry, setNewCountry] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
        //console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);
  const handleAddCountry = (country) => {
    const newCount = [...newCountry, country];
    setNewCountry(newCount);
  };
  return (
    <div className="App">
      <div className="left-side">
        {countries.map((country) => (
          <Country
            handleAddCountry={handleAddCountry}
            country={country}
          ></Country>
        ))}
      </div>
      <div className="right-side">
        <h1>Total loaded countries: {countries.length}</h1>
        <h3>Selected: {newCountry.length}</h3>
        {newCountry.map((country) => (
          <New country={country}></New>
        ))}
      </div>
    </div>
  );
}

export default App;
