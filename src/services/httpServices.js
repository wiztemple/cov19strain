import http from "../http";

const getAllCountries = () => {
  return http.get("/countries");
};
const getStatsDataSummary = () => {
  return http.get("/summary");
};
export default {
  getAllCountries,
  getStatsDataSummary,
};
