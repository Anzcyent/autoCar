import React from "react";
import "./Home.scss";

import carImage from "../../assets/home-car.png";

import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <section className="home">
      <div className="text-area">
        <p className="animate__animated animate__fadeInLeft">
          Welcome to our prestigious car gallery, where automotive dreams come
          to life. Step into a world of unparalleled elegance, power, and
          craftsmanship as we showcase the finest selection of luxury vehicles.
          Our gallery is a haven for car enthusiasts, where you can explore a
          curated collection of iconic models from renowned brands. Immerse
          yourself in the beauty of exquisite design, cutting-edge technology,
          and exhilarating performance. Whether you seek the thrill of a
          high-performance sports car or the refined sophistication of a luxury
          sedan, our gallery offers a unique experience that transcends the
          ordinary. Prepare to be captivated by the allure of automotive
          excellence and let us guide you on a journey to discover your perfect
          driving companion. Welcome to a realm where automotive dreams become
          reality.
        </p>

        <button
          onClick={() => navigate("/cars")}
          className="cars-button animate__animated animate__fadeInLeft"
        >
          Discover our cars
        </button>
      </div>

      <div className="img-area">
        <img
          src={carImage}
          alt="car"
          className="animate__animated animate__fadeInRight"
        />
      </div>
    </section>
  );
};

export default Home;
