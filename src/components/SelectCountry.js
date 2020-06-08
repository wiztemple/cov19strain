import React, { useState, useEffect } from "react";

// services
import httpServices from "../services/httpServices";

const SelectCountry = () => {
  const [countries, setCountries] = useState([]);
  const [countryData, setCountryData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchCountries();
  }, []);
  const fetchCountries = () => {
    httpServices
      .getAllCountries()
      .then((response) => {
        setCountries(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const fetchCountryData = (target) => {
    httpServices
      .getSingleCountryStats(target)
      .then((response) => setCountryData(response.data))
      .catch((e) => console.log(e));
  };
  const optionSelected = (e) => {
    const selected = e.target.value;
    const countryStats = fetchCountryData(selected);
    console.log("hat", countryStats);
    console.log("countryData", countryData);
  };
  return (
    <select className="select-field" onChange={optionSelected}>
      <option value="all">All</option>
      {countries.map((country) => {
        return (
          <option key={country.Slug} value={country.Slug}>
            {country.Country}
          </option>
        );
      })}
    </select>
  );
};

export default SelectCountry;
