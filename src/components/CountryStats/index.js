import React from "react";

// style
import "./CountryStatsStyle.css";

const CountryStats = ({ countryInfo }) => {
  return (
    <div className="country-stats">
      <div className="country-stats_header">
        <span>{countryInfo && countryInfo.country}</span>
        <img src={countryInfo.countryInfo && countryInfo.countryInfo.flag} alt={countryInfo && countryInfo.country} />
      </div>
      <div className="space-between mb-10">
        <div className="country-cases">
          <div className="center-wrapper">
            <span className="block-span">Total Cases</span>
            <span className="country-stats-value blue">{countryInfo.cases && countryInfo.cases.toLocaleString()} <span role="img" aria-label="shocked">😳</span></span>
          </div>
        </div>
        <div className="country-active-cases">
          <div className="center-wrapper">
            <span className="block-span">Active Cases</span>
            <span className="country-stats-value orange">{countryInfo.cases && countryInfo.active.toLocaleString()} <span role="img" aria-label="damn">🧐</span></span>
          </div>
        </div>
      </div>
      <div className="space-between mb-10">
        <div className="country-cases">
          <div className="center-wrapper">
            <span className="block-span">Recovered</span>
            <span className="country-stats-value success">{countryInfo.recovered && countryInfo.recovered.toLocaleString()} <span role="img" aria-label="love">🥰</span></span>
          </div>
        </div>
        <div className="country-active-cases">
          <div className="center-wrapper">
            <span className="block-span">Total Deaths</span>
            <span className="country-stats-value danger">{countryInfo.deaths && countryInfo.deaths.toLocaleString()} <span role="img" aria-label="angry">😡</span></span>
          </div>
        </div>
      </div>
      <div className="space-between">
        <div className="country-cases">
          <div className="center-wrapper">
            <span className="block-span">New Cases</span>
            <span className="country-stats-value blue">{countryInfo.todayCases && countryInfo.todayCases.toLocaleString()}</span>
          </div>
        </div>
        <div className="country-active-cases">
          <div className="center-wrapper">
            <span className="block-span">New Deaths</span>
            <span className="country-stats-value danger">{countryInfo.todayDeaths && countryInfo.todayDeaths.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryStats;
