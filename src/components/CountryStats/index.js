import React from "react";

// style
import "./CountryStatsStyle.css";

const CountryStats = () => {
  return (
    <div className="country-stats">
      <div className="space-between mb-10">
        <div className="country-cases">
          <div className="center-wrapper">
            <span className="block-span">Total Cases</span>
            <span className="country-stats-value blue">240,000000</span>
          </div>
        </div>
        <div className="country-active-cases">
          <div className="center-wrapper">
            <span className="block-span">Active Cases</span>
            <span className="country-stats-value orange">240,000000</span>
          </div>
        </div>
      </div>
      <div className="space-between mb-10">
        <div className="country-cases">
          <div className="center-wrapper">
            <span className="block-span">Recovered</span>
            <span className="country-stats-value success">240,000000</span>
          </div>
        </div>
        <div className="country-active-cases">
          <div className="center-wrapper">
            <span className="block-span">Total Deaths</span>
            <span className="country-stats-value danger">240,000000</span>
          </div>
        </div>
      </div>
      <div className="space-between">
        <div className="country-cases">
          <div className="center-wrapper">
            <span className="block-span">New Cases</span>
            <span className="country-stats-value blue">240,000000</span>
          </div>
        </div>
        <div className="country-active-cases">
          <div className="center-wrapper">
            <span className="block-span">New Deaths</span>
            <span className="country-stats-value danger">240,000000</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryStats;
