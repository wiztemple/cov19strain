import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import GlobalStats from "./components/GlobalStats";
import CountryData from "./components/CountryData";
import Symptoms from "./components/Symptoms";
import Prevention from "./components/Prevention";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <section id="globestats">
        <div className="container-fluid">
          <h1 className="md-py-40">COVID-19 Tracker</h1>
          <GlobalStats />
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
