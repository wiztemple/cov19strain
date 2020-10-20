import React from "react";

// style
import "./CountriesStyle.css";

const Countries = ({ countries }) => {
  return (
    <div className="countries">
      <span>Countries</span>
      {countries?.length > 0 && countries.map(country => (
        <div className="wide-btn">
          <button className="button ripple" value={country.iso2Value}>
            <div className="space-between align-center">
              <div className="flex-start align-center">
                <div className="country-flag">
                  <img src={country.flag} alt="country flag" />
                </div>
                <span className="country-name">{country.name}</span>
              </div>
              <span className="country-total-cases">{country.totalCases}</span>
            </div>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Countries;
