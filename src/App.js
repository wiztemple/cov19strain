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
              </div>
            </div>
            <div class="col-6">
              <DynamicCountryMap />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
