import React, { useEffect, useState } from "react";
import "./Cars.scss";

import { cars } from "../../api/dummy.json";
import { useNavigate } from "react-router-dom";

const Cars = () => {
  const [selectedCar, setSelectedCar] = useState(null);
  const [isSelectedACar, setIsSelectedACar] = useState(false);
  const [renderLikeItButton, setRenderLikeItButton] = useState(false);

  const navigate = useNavigate();

  const handleSelect = (id) => {
    setIsSelectedACar(true);
    setSelectedCar(cars[id - 1]);
  };

  const handleNavigateToContact = () => navigate("/contact");

  useEffect(() => {
    if (isSelectedACar) {
      setTimeout(() => setRenderLikeItButton(true), 3000);
    }
  }, [isSelectedACar]);

  return (
    <section className="cars">
      {isSelectedACar && renderLikeItButton && (
        <button
          onClick={handleNavigateToContact}
          className="did-you-like-it-button animate__animated animate__fadeInRight"
        >
          Did you like it?
        </button>
      )}
      <div className="images-area animate__animated animate__fadeInLeft">
        {cars.map((car) => (
          <img
            style={{ borderColor: car.id === selectedCar?.id && "green" }}
            onClick={() => handleSelect(car.id)}
            key={car.id}
            src={car.image}
            alt={car.brand}
          />
        ))}
      </div>
      {!isSelectedACar ? (
        <div className="car-info">
          <p className="select-a-car-text">Please select a car</p>
        </div>
      ) : (
        <div className="car-info animate__animated animate__zoomIn">
          <h3 className="car-brand">{selectedCar.brand}</h3>
          <span className="car-model">({selectedCar.model})</span>

          <div className="stick"></div>

          <p className="car-description">{selectedCar.description}</p>

          <ul>
            <li className="car-year">
              Year: <span>{selectedCar.year}</span>
            </li>
            <li className="car-price">
              Price: <span>{selectedCar.price}$</span>
            </li>
          </ul>

          <div className="car-image">
            <img src={selectedCar.image} alt={selectedCar.brand} />
          </div>
        </div>
      )}
    </section>
  );
};

export default Cars;
