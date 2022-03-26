import React from "react";
import "./Style/NavBar.scss";

const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light link-effect-3"
      id="link-effect-3"
    >
      <div className="container-fluid">
        <img src="#" alt="ímage" width="100px" height="100px" />
        <a className="navbar-brand" href="this.com">
          BIO
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link"
                data-hover="VIEW-DEMO"
                aria-current="page"
                href="#ViewDemo"
              >
                VIEW DEMO
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                aria-current="page"
                data-hover="FEATURES"
                href="#FEATURES"
              >
                FEATURES
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                aria-current="page"
                data-hover="FAQ"
                href="#FAQ"
              >
                FAQ
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                aria-current="page"
                data-hover="DOCUMENTATION"
                href="#DOCUMENTATION"
              >
                DOCUMENTATION
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#FRIENDLY-SUPPORT"
                tabindex="-1"
                data-hover="FRIENDLY SUPPORT"
              >
                FRIENDLY SUPPORT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
