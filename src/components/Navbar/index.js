import React from "react";

// style
import "./NavbarStyle.css";

// logo
import AppLogo from "../../images/applogo.svg";
import bluecircle from "../../images/bluecircle.svg";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="unknown-circle">
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="15" cy="15" r="13.5" stroke="#2B6FF3" strokeWidth="3" />
        </svg>
      </div>
      <div className="crystal">
        <svg
          width="48"
          height="49"
          viewBox="0 0 48 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.6357 19.7299C9.19386 16.1612 12.156 12.3699 15.9675 12.9056L41.6954 16.5214C45.507 17.0571 47.3093 21.518 44.9396 24.551L28.9443 45.0241C26.5746 48.0572 21.8101 47.3876 20.3683 43.8189L10.6357 19.7299Z"
            fill="#2B6FF3"
            fillOpacity="0.21"
          />
        </svg>
      </div>
      <div className="nav-blue-cirlce">
        <img src={bluecircle} alt="blue circle" />
      </div>
      <div className="container-fluid">
        <div className="nav-mobile">
          <div className="nav-brand">
            <img src={AppLogo} alt="App Logo" />
            <a href="/">Cov19Strain</a>
          </div>
          <div>
            <button className="nav-menu-button">
              <svg
                className="nav-menu-hamburger"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="nav-menu">
          <div className="nav-left">
            <a href="#globestats" className="nav-link active">
              HOME
            </a>
            <a href="#symptoms" className="nav-link">
              SYMPTOMS
            </a>
            <a href="#prevention" className="nav-link">
              PREVENTION
            </a>
          </div>
          <div className="nav-right">
            <div className="nav-item">
              <div className="update-pill">Last Updated: <span>{new Date().toLocaleDateString()}</span></div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
