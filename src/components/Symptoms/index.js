import React from "react";

// style
import "./SymptomsStyle.css";

// image
import doctor from "../../images/doctor.svg";

const Symptoms = () => {
  return (
    <div className="symptoms">
      <div className="columns">
        <div className="full-width md-col-6 md-pl-0 md-mt-120">
          <div className="symptoms-pill">Corona Virus Symptoms</div>
          <div className="main-info">
            <h1>What are the symptoms?</h1>
            <p className="symptoms-paragraph">
              People may be sick with the virus for 1 to 14 days before
              developing symptoms. The most common symptoms of coronavirus
              disease (COVID-19) are fever, tiredness, and dry cough. Less
              common symptoms are aches and pains, sore throat, diarrhoea,
              conjuctivitis, headache, loss of taste or smell, a rash on skin or
              discolouration of fingers or toes. Serious symptoms are difficulty
              in brething or shortness of breath, ches pain or pressure, loss of
              speech movement. Most people (about 80%) recover from the disease
              without needing special treatment. More rarely, the disease can be
              serious and even fatal. Older people, and people with other
              medical conditions (such as asthma, diabetes, or heart disease),
              may be more vulnerable to becoming severely ill.
            </p>
          </div>
        </div>
        <div className="full-width md-col-6 md-pl-0">
          <div className="doctor-svg">
            <img src={doctor} alt="doctor" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Symptoms;
