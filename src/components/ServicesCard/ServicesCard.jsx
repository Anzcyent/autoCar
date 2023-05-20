import React from "react";
import "./ServicesCard.scss";

const ServicesCard = ({ title, description, image }) => {
  return (
    <div className="services-card">
      <div className="card-header">
        <img src={image} alt={image} />
      </div>

      <div className="card-body">
        <h5>{title}</h5>
        <small>{description}</small>
      </div>
    </div>
  );
};

export default ServicesCard;
