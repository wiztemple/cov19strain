import React, { useState, useEffect } from "react";

// style
import "./CountryDataStyle.css";
import Countries from "../Countries";

// image
import circle from "../../images/circle.svg";
import CountryStats from "../CountryStats";
import map from "../../images/map.svg";

const CountryData = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then(response => response.json()).then(data => {
          const countries = data.map(country => (
            {
              name: country.country,
              iso2Value: country.countryInfo.iso2,
              flag: country.countryInfo.flag,
              totalCases: country.cases
            }));
          setCountries(countries);
        })
    }
    getCountriesData();
  }, []);
  return (
    <div className="country-data">
      <div className="transparent-circle">
        <img src={circle} alt="transparent circle" />
      </div>
      <h2>Top Affected Countries</h2>
      <p className="updated-last">Last Updated: May 22, 2020</p>
      <div className="columns">
        <div className="full-width md-col-4 md-pl-0">
          <Countries countries={countries} />
        </div>
        <div className="full-width md-col-4">
          <CountryStats />
        </div>
        <div className="md-col-4">
          <div className="svg-map">
            <img src={map} alt="svg map" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryData;
