import React from "react";

const AllCountriesSummary = ({ countryData }) => {
  return (
    <div class="top-countries-wrapper">
      <div class="top-country-wrapper">
        <div class="flex-start align-center">
          <span className="flagless"></span>
          <span class="top-country-wrapper-name">{countryData.Country}</span>
        </div>
        <span class="top-country-wrapper-count">
          {countryData.TotalConfirmed}
        </span>
      </div>
    </div>
  );
};

export default AllCountriesSummary;
