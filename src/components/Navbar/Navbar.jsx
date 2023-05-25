import React from "react";
import "./Navbar.scss";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="logo-area">
          <h1>
            <Link to="/" style={{textDecoration: "none", color:"#fff"}}>AutoCar</Link>
          </h1>
        </div>

        <ul className="menu">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/cars">
            <li>Cars</li>
          </Link>

          <Link to="/services">
            <li>Services </li>
          </Link>

          <Link to="/contact">
            <li>Contact </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
