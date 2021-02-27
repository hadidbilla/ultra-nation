import React from "react";
import "./New.css";

const New = (props) => {
  const { name, area, population, flag, alpha2Code } = props.country;
  return (
    <div className="country">
      <div className="single-img">
        <img src={flag} alt="" srcset="" />
      </div>
      <div className="single-details">
        <h2>Name: {name}</h2>
        <p>
          <small>Code: {alpha2Code}</small>
        </p>
        <p>
          <small>Area: {area}</small>
        </p>
        <p>
          <small>Population: {population}</small>
        </p>
      </div>
    </div>
  );
};

export default New;
