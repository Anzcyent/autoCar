import React from "react";
import "./ServicesPartner.scss";

const ServicesPartner = ({logo, name}) => {
  return <div className="services-partner">
    <img src={logo} alt={logo} className="partner-logo" />
    <h5>{name}</h5>
  </div>;
};

export default ServicesPartner;
