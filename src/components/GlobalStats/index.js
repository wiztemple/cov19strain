import React from "react";

// styles
import "./GlobalStatsStyle.css";

const GlobalStats = () => {
  return (
    <div className="globalstats">
      <div className="columns">
        <div className="md-col-3">
          <div className="cases total-cases">
            <div className="cases-circle total-cases-circle">
              <div className="centralized-circle-content">
                <h1>Total Cases</h1>
                <span className="case-count">260,00000</span>
                <p className="latest-count">+2355</p>
              </div>
            </div>
          </div>
        </div>
        <div className="md-col-3">
          <div className="cases active-cases">
            <div className="cases-circle active-cases-circle">
              <div className="centralized-circle-content">
                <h1>Active Cases</h1>
                <span className="case-count">260,00000</span>
                <p className="latest-count">+2355</p>
              </div>
            </div>
          </div>
        </div>
        <div className="md-col-3">
          <div className="cases recovered-cases">
            <div className="cases-circle recovered-cases-circle">
              <div className="centralized-circle-content">
                <h1>Recovered</h1>
                <span className="case-count">260,00000</span>
                <p className="latest-count">+2355</p>
              </div>
            </div>
          </div>
        </div>
        <div className="md-col-3">
          <div className="cases total-deaths">
            <div className="cases-circle total-deaths-circle">
              <div className="centralized-circle-content">
                <h1>Total Deaths</h1>
                <span className="case-count">260,00000</span>
                <p className="latest-count">+2355</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalStats;
