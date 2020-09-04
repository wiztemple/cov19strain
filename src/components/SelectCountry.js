import React, { useState, useEffect } from "react";

// services
import httpServices from "../services/httpServices";
import CountryData from "./CountryData";

// const yesterDayData = countryData[countryData.length - 2]
// const todaysData = array[array.length - 1];
const SelectCountry = ({ setSelectedCountry }) => {
  const [countries, setCountries] = useState([]);
  const [countryData, setCountryData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchCountries();
  }, []);
  const fetchCountries = () => {
    setLoading(true);
    httpServices
      .getAllCountries()
      .then((response) => {
        setCountries(response.data);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  };
  const fetchCountryData = (target) => {
    httpServices.getSingleCountryStats(target)
    .then((response) => setCountryData(() => response.data[response.data.length -1])).catch((e) => console.log(e))
  }
  const optionSelected = (e) => {
    const selected = e.target.value;
    setSelectedCountry(selected);
    fetchCountryData(selected);
  };
  console.log("countryData2", countryData);
  return (
    <>
      <select className="select-field" onChange={optionSelected} onBlur={optionSelected}  disabled={countries.length === 0}>
        <option value="all">All</option>
        {countries.map(country =>  (<option key={country.Slug} value={country.Slug}>{country.Country}</option>))}
      </select>
      {countryData ? <CountryData countryData={countryData} />: "No Available Data"}
    </>
   
  );
};

export default SelectCountry;
