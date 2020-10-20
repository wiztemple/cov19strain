import React, { useState, useEffect } from "react";

// style
import "./CountryDataStyle.css";
import Countries from "../Countries";

// image
import circle from "../../images/circle.svg";
import CountryStats from "../CountryStats";
import LineGraph from "../LineGraph";

const CountryData = () => {
  const [countries, setCountries] = useState([]);
  const [countryInfo, setCountryInfo] = useState({});
  const [country, setCountry] = useState('NG');

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
    const getNigeriaData = async () => {
      const url = `https://disease.sh/v3/covid-19/countries/NG`;
      await fetch(url).then(response => response.json())
        .then(data => {
          setCountry(country);
          setCountryInfo(data);
        })
    }
    getCountriesData();
    getNigeriaData();
  }, []);

  const onCountryClick = async (e) => {
    const countryCode = e.iso2Value;
    const url = `https://disease.sh/v3/covid-19/countries/${countryCode}`;
    await fetch(url).then(response => response.json())
      .then(data => {
        console.log('data data', data)
        setCountry(countryCode);
        setCountryInfo(data);
      })
  }
  return (
    <div className="country-data">
      <div className="transparent-circle">
        <img src={circle} alt="transparent circle" />
      </div>
      <h2>Top Affected Countries</h2>
      <p className="updated-last">Last Updated: May 22, 2020</p>
      <div className="columns">
        <div className="full-width md-col-4 md-pl-0">
          <Countries countries={countries} clickCountry={onCountryClick} />
        </div>
        <div className="full-width md-col-4">
          <CountryStats countryInfo={countryInfo} />
        </div>
        <div className="md-col-4">
          <div className="svg-map">
            <h2>Last 120 Days</h2>
            <LineGraph />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryData;
