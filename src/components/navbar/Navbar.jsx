import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="port__navbar section-padding">
      <div className="port__navbar-ops">
        <p>
          <a href="#HOME">Home</a>
        </p>
        <p>
          <a href="#Portfolio">Portfolio</a>
        </p>
        <p>
          <a href="#Skills">Skills</a>
        </p>
        <p>
          <a href="#Contact">Contact</a>
        </p>
      </div>
    </div>
  );
};

export default Navbar;
