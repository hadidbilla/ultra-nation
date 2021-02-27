import React from "react";
import "./Country.css";

function Country(props) {
  const { name, area, population, flag, alpha2Code } = props.country;
  const handleAddCountry = props.handleAddCountry;
  return (
    <div className="item">
      <div className="flag-image">
        <img src={flag} alt="" srcset="" />
      </div>
      <div className="country-details">
        <div className="">
          <h2>Name: {name}</h2>
        </div>
        <div className="">
          <p>
            <small>Code: {alpha2Code}</small>
          </p>
          <p>
            <small>Area: {area}</small>
          </p>
          <p>
            <small>Population: {population}</small>
          </p>
          <div className="btn">
            <button
              onClick={() => handleAddCountry(props.country)}
              type="submit"
            >
              Add Country
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Country;
