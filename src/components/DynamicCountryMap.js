import React, {useEffect, useState} from "react"
import { geoEqualEarth, geoPath } from "d3-geo"
import * as topojson from "topojson-client"
import mapPlaceholder from '../images/mapplaceholder.png'

//d3 js Topics for map
// Loading and parsing TOPOJSON
// Rendering Geographical features
// Using different map projections
// Rendering the projected sphere outline
// Tweaking the map style
// install world-atlas TOPOJSON
// const projection = geoEqualEarth()
//   .scale(160)
//   .translate([ 800 / 2, 450 / 2 ])
const DynamicCountryMap = ({ selectedCountry }) => {
//   const [geographies, setGeographies] = useState([])
//   // const projection = geoMercator();
//   // const pathGenerator = geoPath().projection(projection);
//   useEffect(() => {
//     json('https://unpkg.com/world-atlas@1.1.4/world/110m.json').then(worlddata => {
//       // const countries = topojson.feature(worlddata, data.objects.countries);
//       setGeographies(topojson.feature(worlddata, worlddata.objects.countries).features)
//       // console.log('data',data);
//       // console.log('data2', countries);
//       // const paths = svg.selectAll('path').data(countries.features);
//       // paths.enter().append('path').attr('d', d => pathGenerator(d));
//     })
//   }, []);

  return (
    <div className="country-map-wrapper">
      <h3 className="capitalize">{selectedCountry}</h3>
      {/* <svg width={ 800 } height={ 450 } viewBox="0 0 800 450">
        <g className="countries">
          {
            geographies.map((d,i) => (
              <path
                key={ `path-${ i }` }
                d={ geoPath().projection(projection)(d) }
                className="country"
                fill={ `rgba(38,50,56,${ 1 / geographies.length * i})` }
                stroke="#FFFFFF"
                strokeWidth={ 0.5 }
              />
            ))
          }
        </g>
        <g className="markers">
          <circle
            cx={ projection()([8,48])[0] }
            cy={ projection()([8,48])[1] }
            r={ 10 }
            fill="#E91E63"
            className="marker"
          />
        </g>
      </svg> */}
      <img src={mapPlaceholder} alt="map placeholder" />
    </div>
  );
};

export default DynamicCountryMap;
