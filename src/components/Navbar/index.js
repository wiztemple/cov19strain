import React from "react";

// style
import "./NavbarStyle.css";

// logo
import AppLogo from "../../images/applogo.svg";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="container-fluid">
        <div className="nav-mobile">
          <div className="nav-brand">
            <img src={AppLogo} alt="App Logo" />
            <a href="#">Cov19Strain</a>
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
            <a href="#" className="nav-link active">
              HOME
            </a>
            <a href="#" className="nav-link">
              SYMPTOMS
            </a>
            <a href="#" className="nav-link">
              PREVENTION
            </a>
          </div>
          <div className="nav-right">
            <div className="nav-item">
              <div className="update-pill">Last Updated: September 3, 2020</div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
