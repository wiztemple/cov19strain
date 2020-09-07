import React from "react";

// style
import "./CountriesStyle.css";

const Countries = () => {
  return (
    <div className="countries">
      <span>Countries</span>
      <div className="wide-btn">
        <button className="button ripple">
          <div className="space-between align-center">
            <div className="flex-start">
              <div className="country-flag"></div>
              <span className="country-name">USA</span>
            </div>
            <span className="country-total-cases">12400055</span>
          </div>
        </button>
      </div>
      <div className="wide-btn">
        <button className="button active ripple">
          <div className="space-between align-center">
            <div className="flex-start">
              <div className="country-flag"></div>
              <span className="country-name">Canada</span>
            </div>
            <span className="country-total-cases">12400055</span>
          </div>
        </button>
      </div>
      <div className="wide-btn">
        <button className="button ripple">
          <div className="space-between align-center">
            <div className="flex-start">
              <div className="country-flag"></div>
              <span className="country-name">China</span>
            </div>
            <span className="country-total-cases">12400055</span>
          </div>
        </button>
      </div>
      <div className="wide-btn">
        <button className="button ripple">
          <div className="space-between align-center">
            <div className="flex-start">
              <div className="country-flag"></div>
              <span className="country-name">Spain</span>
            </div>
            <span className="country-total-cases">12400055</span>
          </div>
        </button>
      </div>
      <div className="wide-btn">
        <button className="button ripple">
          <div className="space-between align-center">
            <div className="flex-start">
              <div className="country-flag"></div>
              <span className="country-name">France</span>
            </div>
            <span className="country-total-cases">12400055</span>
          </div>
        </button>
      </div>
      <div className="wide-btn">
        <button className="button ripple">
          <div className="space-between align-center">
            <div className="flex-start">
              <div className="country-flag"></div>
              <span className="country-name">China</span>
            </div>
            <span className="country-total-cases">12400055</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Countries;
