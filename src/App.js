import React, { useState, useEffect } from "react";
import { sortData } from './util';
import "./App.css";
import Navbar from "./components/Navbar";
import GlobalStats from "./components/GlobalStats";
import CountryData from "./components/CountryData";
import Symptoms from "./components/Symptoms";
import Prevention from "./components/Prevention";
import Footer from "./components/Footer";

const App = () => {
  const [globalData, setGlobalData] = useState({});

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setGlobalData(data)
      })

  }, [])
  return (
    <div className="app">
      <Navbar />
      <section id="globestats">
        <div className="container-fluid">
          <h1 className="md-py-40">COVID-19 Tracker</h1>
          <GlobalStats
            totalCases={globalData.cases}
            activeCases={globalData.cases}
            recovered={globalData.recovered}
            deaths={globalData.deaths}
            todayCases={globalData.todayCases}
            todayRecovered={globalData.todayRecovered}
            todayDeaths={globalData.todayDeaths}
          />
          <CountryData />
        </div>
      </section>
      <section id="symptoms">
        <div className="container-fluid">
          <Symptoms />
        </div>
      </section>
      <section id="prevention">
        <div className="container-fluid">
          <Prevention />
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default App;
