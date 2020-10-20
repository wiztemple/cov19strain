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
                <span className="case-count">{totalCases}</span>
                <p className="latest-count">{todayCases}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="full-width md-col-3">
          <div className="cases active-cases magic-mt">
            <div className="cases-circle active-cases-circle">
              <div className="centralized-circle-content">
                <h1>Active Cases</h1>
                <span className="case-count">{activeCases}</span>
                <p className="latest-count">{todayCases}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="full-width md-col-3">
          <div className="cases recovered-cases magic-mt">
            <div className="cases-circle recovered-cases-circle">
              <div className="centralized-circle-content">
                <h1>Recovered</h1>
                <span className="case-count">{recovered}</span>
                <p className="latest-count">{todayRecovered}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="full-width md-col-3">
          <div className="cases total-deaths magic-mt">
            <div className="cases-circle total-deaths-circle">
              <div className="centralized-circle-content">
                <h1>Total Deaths</h1>
                <span className="case-count">{deaths}</span>
                <p className="latest-count">{todayDeaths}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalStats;
