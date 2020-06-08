import http from "../http";

const getAllCountries = () => {
  return http.get("/countries");
};
const getStatsDataSummary = () => {
  return http.get("/summary");
};
const getSingleCountryStats = (countryname) => {
  return http.get(`/country/${countryname}`);
};
export default {
  getAllCountries,
  getStatsDataSummary,
  getSingleCountryStats,
};
