import React from "react";

const CountryData = ({countryData: {Confirmed, Deaths, Recovered, Active}}) => {
  return (
    <div>
      <div className="space-between">
        <div className="selected-country-details-card">
          <h1>Total Cases</h1>
  <span className="warning">{Confirmed}</span>
        </div>
        <div className="selected-country-details-card">
          <h1>Total Deaths</h1>
  <span className="danger">{Deaths}</span>
        </div>
      </div>
      <div className="space-between">
        <div className="selected-country-details-card">
          <h1>Recoveries</h1>
  <span className="success">{Recovered}</span>
        </div>
        <div className="selected-country-details-card">
          <h1>Active Cases</h1>
  <span className="blue">{Active}</span>
        </div>
      </div>
      <div className="space-between">
        <div className="selected-country-details-card">
          <h1>New Cases</h1>
          <span className="orange">0</span>
        </div>
        <div className="selected-country-details-card">
          <h1>New Deaths</h1>
          <span className="deepred">0</span>
        </div>
      </div>
    </div>
  );
};

CountryData.defaultProps = {
  Confirmed: 0,
  Deaths: 0,
  Recovered: 0,
  Active: 0
}

export default CountryData;
