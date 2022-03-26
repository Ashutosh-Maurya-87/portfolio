import React from "react";
import "./Style/NavBar.scss";

const NavBar = () => {
  return (
    <div className="Navbar">
      <div className="navlist d-flex justify-content-end">
        <span className="mx-4">VIEW DEMO</span>
        <span className="mx-4">FEATURE</span>
        <span className="mx-4">FAQ</span>
        <span className="mx-4">DOCUMENTATION</span>
        <span className="temp">FRIENDLY SUPPORT</span>
      </div>
    </div>
  );
};

export default NavBar;
