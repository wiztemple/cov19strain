import React from "react";

const StatsSummary = ({ statsSummary: {NewConfirmed, TotalConfirmed, TotalDeaths, NewRecovered, NewDeaths, TotalRecovered} } )=> {
  return (
    <div>
      <div className="stats-pill default">
        <span className="right-wrapper-cases-title">Total Cases</span>
        <div className="space-between">
          <div className="latest-cases">
            +
            {NewConfirmed &&
              NewConfirmed.toLocaleString()}
          </div>
          <span className="right-wrapper-cases-number">
            {TotalConfirmed &&
              TotalConfirmed.toLocaleString()}
          </span>
        </div>
      </div>
      <div className="stats-pill activecases">
        <span className="right-wrapper-cases-title">Active Cases</span>
        <div className="space-between">
          <div className="latest-cases">
            +
            {NewConfirmed &&
              NewConfirmed.toLocaleString()}
          </div>
          <span className="right-wrapper-cases-number">
            {Number(
              TotalConfirmed -
                (TotalDeaths + TotalRecovered),
            )}
          </span>
        </div>
      </div>
      <div className="stats-pill recoveries">
        <span className="right-wrapper-cases-title">
          Recoveries{" "}
          {/* <span role="img" aria-label="img">
            😁
          </span> */}
        </span>
        <div className="space-between">
          <div className="latest-cases">
            +
            {NewRecovered &&
              NewRecovered.toLocaleString()}
          </div>
          <span className="right-wrapper-cases-number">
            {TotalRecovered &&
              TotalRecovered.toLocaleString()}
          </span>
        </div>
      </div>
      <div className="stats-pill deaths">
        <span className="right-wrapper-cases-title">Total Deaths</span>
        <div className="space-between">
          <div className="latest-cases">
            +{NewDeaths && NewDeaths.toLocaleString()}
          </div>
          <span className="right-wrapper-cases-number">
            {TotalDeaths &&
              TotalDeaths.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
};
StatsSummary.defaultProps = {
  NewDeaths: 0,
}

export default StatsSummary;
