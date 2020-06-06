import React, { useEffect, useState } from "react";
import AllCountriesSummary from "./AllCountriesSummary";
import StatsSummary from "./StatsSummary";
import httpServices from "../services/httpServices";

// components to feed the data

const StatsSummaryData = () => {
  const [statsSummary, setStatsSummary] = useState({});
  const [countriesData, setCountriesData] = useState([]);
  useEffect(() => {
    getTotalSummary();
    getCountriesData();
  }, []);
  const getCountriesData = () => {
    httpServices
      .getStatsDataSummary()
      .then((response) => setCountriesData(response.data.Countries))
      .catch((e) => console.log(e));
  };
  const getTotalSummary = () => {
    httpServices
      .getStatsDataSummary()
      .then((response) => setStatsSummary(response.data.Global))
      .then((e) => console.log(e));
  };
  return (
    <div>
      {/* <code>{JSON.stringify(statsSummary)}</code> */}
      <StatsSummary statsSummary={statsSummary} />
      {countriesData &&
        countriesData.map((countryData) => (
          <AllCountriesSummary countryData={countryData} />
        ))}
    </div>
  );
};
export default StatsSummaryData;
