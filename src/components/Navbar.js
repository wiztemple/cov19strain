import React from "react";

// icons
import AppLogo from "../images/coronavirus.png";
import HomeIcon from "../images/home.svg";
import GridIcon from "../images/grid.svg";

const Navbar = () => {
  const formatDate = () => {
    const d = new Date();
    const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
    const mo = new Intl.DateTimeFormat("en", { month: "short" }).format(d);
    const da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);
    return `${da}-${mo}-${ye}`;
  };
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <div className="brand">
          <a href="index.html" className="navbar-item">
            <img className="brand-logo" src={AppLogo} alt={AppLogo} />
            <span>Cov19Strain</span>
          </a>
          <a
            href
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navMenu"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div className="nav-menu" id="navMenu">
          <div className="navbar-left">
            <a
              className="navbar-item ripple active"
              href="#realtime-data-section"
            >
              <span className="navbar-span-icon">
                <img src={HomeIcon} alt="home icon" />
              </span>
              Home
            </a>
            <a className="navbar-item ripple" href="#contagion-section">
              <span className="navbar-span-icon">
                <img src={GridIcon} alt="grid icon" />
              </span>
              Grid
            </a>
          </div>
          <div className="navbar-right">
            <div className="navbar-item">Last Updated at {formatDate()}</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
