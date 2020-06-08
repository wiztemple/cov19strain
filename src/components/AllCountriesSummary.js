import React from "react";

const AllCountriesSummary = ({ countryData }) => {
  return (
    <div className="top-countries-wrapper">
      <div className="top-country-wrapper">
        <div className="flex-start align-center">
          <span className="flagless"></span>
          <span className="top-country-wrapper-name">
            {countryData.Country}
          </span>
        </div>
        <span className="top-country-wrapper-count">
          {countryData.TotalConfirmed &&
            countryData.TotalConfirmed.toLocaleString()}
        </span>
      </div>
    </div>
  );
};

export default AllCountriesSummary;
