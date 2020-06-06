import React, { useState, useEffect } from "react";

// services
import httpServices from "../services/httpServices";

const SelectCountry = () => {
  const [countries, setCountries] = useState([]);
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

  return (
    <select class="select-field">
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
