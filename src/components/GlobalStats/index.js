import React from "react";

// styles
import "./GlobalStatsStyle.css";

const GlobalStats = ({ totalCases, activeCases, recovered, deaths, todayRecovered, todayCases, todayDeaths }) => {
  return (
    <div className="globalstats">
      <div className="columns">
        <div className="full-width md-col-3">
          <div className="cases total-cases">
            <div className="cases-circle total-cases-circle">
              <div className="centralized-circle-content">
                <h1>Total Cases</h1>
                <span className="case-count">{totalCases && totalCases.toLocaleString()}</span>
                <p className="latest-count">{todayCases && todayCases.toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="full-width md-col-3">
          <div className="cases active-cases magic-mt">
            <div className="cases-circle active-cases-circle">
              <div className="centralized-circle-content">
                <h1>Active Cases</h1>
                <span className="case-count">{activeCases && activeCases.toLocaleString()}</span>
                <p className="latest-count">{todayCases && todayCases.toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="full-width md-col-3">
          <div className="cases recovered-cases magic-mt">
            <div className="cases-circle recovered-cases-circle">
              <div className="centralized-circle-content">
                <h1>Recovered</h1>
                <span className="case-count">{recovered && recovered.toLocaleString()}</span>
                <p className="latest-count">{todayRecovered && todayRecovered.toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="full-width md-col-3">
          <div className="cases total-deaths magic-mt">
            <div className="cases-circle total-deaths-circle">
              <div className="centralized-circle-content">
                <h1>Total Deaths</h1>
                <span className="case-count">{deaths && deaths.toLocaleString()}</span>
                <p className="latest-count">{todayDeaths && todayDeaths.toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalStats;
