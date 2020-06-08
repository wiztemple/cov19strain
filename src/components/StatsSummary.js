import React from "react";

const StatsSummary = ({ statsSummary }) => {
  return (
    <div>
      <div className="stats-pill default">
        <span className="right-wrapper-cases-title">Total Cases</span>
        <div className="space-between">
          <div className="latest-cases">
            +
            {statsSummary.NewConfirmed &&
              statsSummary.NewConfirmed.toLocaleString()}
          </div>
          <span className="right-wrapper-cases-number">
            {statsSummary.TotalConfirmed &&
              statsSummary.TotalConfirmed.toLocaleString()}
          </span>
        </div>
      </div>
      <div className="stats-pill activecases">
        <span className="right-wrapper-cases-title">Active Cases</span>
        <div className="space-between">
          <div className="latest-cases">
            +
            {statsSummary.NewConfirmed &&
              statsSummary.NewConfirmed.toLocaleString()}
          </div>
          <span className="right-wrapper-cases-number">
            {Number(
              statsSummary.TotalConfirmed -
                (statsSummary.TotalDeaths + statsSummary.TotalRecovered),
            )}
          </span>
        </div>
      </div>
      <div className="stats-pill recoveries">
        <span className="right-wrapper-cases-title">Recoveries</span>
        <div className="space-between">
          <div className="latest-cases">
            +
            {statsSummary.NewRecovered &&
              statsSummary.NewRecovered.toLocaleString()}
          </div>
          <span className="right-wrapper-cases-number">
            {statsSummary.TotalRecovered &&
              statsSummary.TotalRecovered.toLocaleString()}
          </span>
        </div>
      </div>
      <div className="stats-pill deaths">
        <span className="right-wrapper-cases-title">Total Deaths</span>
        <div className="space-between">
          <div className="latest-cases">
            +{statsSummary.NewDeaths && statsSummary.NewDeaths.toLocaleString()}
          </div>
          <span className="right-wrapper-cases-number">
            {statsSummary.TotalDeaths &&
              statsSummary.TotalDeaths.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default StatsSummary;
