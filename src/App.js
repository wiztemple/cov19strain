import React from "react";
import "./App.css";

// components
import Navbar from "./components/Navbar";
import DynamicCountryMap from "./components/DynamicCountryMap";
import StatsSummaryData from "./components/StatsSummaryData";
import SelectCountry from "./components/SelectCountry";

const App = () => {
  return (
    <div className="App">
      <div className="header">
        <Navbar />
      </div>
      <section>
        <div className="container-fluid">
          <div className="columns">
            <div className="col-3">
              <div className="right-wrapper">
                <h1>COVID-19 Tracker</h1>
                <StatsSummaryData />
              </div>
            </div>
            <div className="col-3">
              <div className="country-select-wrapper">
                <SelectCountry />
                <div className="space-between">
                  <div className="selected-country-details-card">
                    <h1>Total Cases</h1>
                    <span className="warning">3636636</span>
                  </div>
                  <div className="selected-country-details-card">
                    <h1>Total Deaths</h1>
                    <span className="danger">3636636</span>
                  </div>
                </div>
                <div className="space-between">
                  <div className="selected-country-details-card">
                    <h1>Recoveries</h1>
                    <span className="success">3636636</span>
                  </div>
                  <div className="selected-country-details-card">
                    <h1>Active Cases</h1>
                    <span className="blue">3636636</span>
                  </div>
                </div>
                <div className="space-between">
                  <div className="selected-country-details-card">
                    <h1>New Cases</h1>
                    <span className="orange">3636636</span>
                  </div>
                  <div className="selected-country-details-card">
                    <h1>New Deaths</h1>
                    <span className="deepred">3636636</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <DynamicCountryMap />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
