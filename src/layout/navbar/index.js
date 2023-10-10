import React from "react";
import "./index.scss";

const Navbar = () => {
  return <div className="main-box">
    <div className="nav-box">
        <div>
            <span className="logo">A|R</span>
            <span className="name">Arnab Ranjan Das</span>
        </div>
        <div className="nav-menu">
            <span className="item">Home</span>
            <span className="item">Resume</span>
            <span className="item">About</span>
            <span className="item contact">Contact</span>
        </div>
    </div>
  </div>;
};

export default Navbar;
