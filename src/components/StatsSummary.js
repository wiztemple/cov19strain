import React from "react";

const StatsSummary = ({ statsSummary }) => {
  return (
    <div>
      <div class="stats-pill default">
        <span class="right-wrapper-cases-title">Total Cases</span>
        <div class="space-between">
          <div class="latest-cases">+{statsSummary.NewConfirmed}</div>
          <span class="right-wrapper-cases-number">
            {statsSummary.TotalConfirmed}
          </span>
        </div>
      </div>
      <div class="stats-pill activecases">
        <span class="right-wrapper-cases-title">Active Cases</span>
        <div class="space-between">
          <div class="latest-cases">+{statsSummary.NewConfirmed}</div>
          <span class="right-wrapper-cases-number">
            {statsSummary.TotalConfirmed -
              (statsSummary.TotalDeaths + statsSummary.TotalRecovered)}
          </span>
        </div>
      </div>
      <div class="stats-pill recoveries">
        <span class="right-wrapper-cases-title">Recoveries</span>
        <div class="space-between">
          <div class="latest-cases">+{statsSummary.NewRecovered}</div>
          <span class="right-wrapper-cases-number">
            {statsSummary.TotalRecovered}
          </span>
        </div>
      </div>
      <div class="stats-pill deaths">
        <span class="right-wrapper-cases-title">Total Deaths</span>
        <div class="space-between">
          <div class="latest-cases">+{statsSummary.NewDeaths}</div>
          <span class="right-wrapper-cases-number">
            {statsSummary.TotalDeaths}
          </span>
        </div>
      </div>
    </div>
  );
};

export default StatsSummary;
