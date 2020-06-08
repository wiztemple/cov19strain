import React from "react";

// map image
import MapPlaceholder from "../images/mapplaceholder.png";

const DynamicCountryMap = () => {
  return (
    <div className="country-map-wrapper">
      <h3>USA</h3>
      <img src={MapPlaceholder} alt="map placeholder" />
    </div>
  );
};

export default DynamicCountryMap;
