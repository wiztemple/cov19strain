import React from "react";

// style
import "./FooterStyle.css";

// images
import AppLogo from "../../images/applogo.svg";
import bluecircle from "../../images/bluecircle.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="blue-circle">
        <img src={bluecircle} alt="blue circle" />
      </div>
      <div className="container-fluid">
        <div className="columns">
          <div className="md-col-4">
            <div className="footer-logo">
              <div className="flex-start align-center">
                <img src={AppLogo} alt="'app logo" />
                <h1>Cov19Strain</h1>
              </div>
              <p className="source">Source:</p>
              <p className="source-desc">
                The infos on this this webpage were crawled from WHO, images
                were downloaded from Pixaybay and Pexels, Icons were downloaded
                from Iconfinder and Flaticons.
              </p>
            </div>
          </div>
          <div className="md-col-4">
            <div className="justify-center">
              <div className="useful-links">
                <h1>Useful Links</h1>
                <a href="https://www.who.int/health-topics/coronavirus#tab=tab_1">
                  WHO Information
                </a>
                <a href="https://en.wikipedia.org/wiki/Coronavirus_disease_2019">
                  COVID-19 Wikipedia
                </a>
                <a href="https://edition.cnn.com/world/live-news/coronavirus-pandemic-09-08-20-intl/h_47508de310d9dc86a64ba45b4e082079">
                  World News on COVID-19
                </a>
                <a href="https://covidtracking.com/">COVID-19 Tracking</a>
                <a href="https://www.covidexitstrategy.org/">
                  COVID-19 exit strategy
                </a>
              </div>
            </div>
          </div>
          <div className="md-col-4">
            <div className="emergency">
              <h1>Emergency Numbers to call</h1>
              <p>+2348030000000, 5739 00030300</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
