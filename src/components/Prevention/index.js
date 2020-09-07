import React from "react";

// styles
import "./PreventionStyle.css";

// image
import useravatar from "../../images/protection.svg";
import wearamask from "../../images/wearamask.svg";
import handshake from "../../images/handshake.svg";
import facetouch from "../../images/facetouch.svg";
import safedistance from "../../images/safedistance.svg";
import stayhome from "../../images/stayhome.svg";

const Prevention = () => {
  return (
    <div className="prevention">
      <div className="columns">
        <div className="full-width md-col-6">
          <div className="user-avatar">
            <img src={useravatar} alt="prevention" />
          </div>
        </div>
        <div className="full-width md-col-6">
          <div className="prevention-info">
            <h1>How can I protect myself from Covid-19?</h1>
            <p className="prevention-desc">
              Coronavirus disease spreads primarily through contact with an
              infected person when they cough or sneeze. It also spreads when a
              person touches a surface or object that has the virus on it, then
              touches their eyes, nose, or mouth.
            </p>
            <h4>
              What should <span className="success">I do?</span>
            </h4>
            <div className="preventive-measures">
              <div className="space-between">
                <div className="measures-card">
                  <img src={wearamask} alt="wear a mask" />
                  <p>Wear a facemask</p>
                </div>
                <div className="measures-card">
                  <img src={facetouch} alt="Touch face" />
                  <p>Don’t touch your face</p>
                </div>
                <div className="measures-card">
                  <img src={handshake} alt="hand shake" />
                  <p>Avoid hand contact</p>
                </div>
              </div>
              <div className="justify-center">
                <div className="flex-start full-width">
                  <div className="measures-card">
                    <img src={safedistance} alt="safe distance" />
                    <p>Keep safe distance</p>
                  </div>
                  <div className="measures-card">
                    <img src={stayhome} alt="stay home" />
                    <p>Stay at home if you can</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prevention;
