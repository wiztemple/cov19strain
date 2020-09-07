import React from "react";

// style
import "./CountryDataStyle.css";
import Countries from "../Countries";

// image
import circle from "../../images/circle.svg";
import CountryStats from "../CountryStats";
import map from "../../images/map.svg";

const CountryData = () => {
  return (
    <div className="country-data">
      <div className="transparent-circle">
        <img src={circle} alt="transparent circle" />
      </div>
      <h2>Top Affected Countries</h2>
      <p className="updated-last">Last Updated: May 22, 2020</p>
      <div className="columns">
        <div className="md-col-4 md-pl-0">
          <Countries />
        </div>
        <div className="md-col-4">
          <CountryStats />
        </div>
        <div className="md-col-4">
          <div className="svg-map">
            <img src={map} alt="svg map" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryData;
