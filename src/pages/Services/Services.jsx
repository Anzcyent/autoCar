import React from "react";
import "./Services.scss";

import { services, partners } from "../../api/dummy.json";
import { ServicesCard, ServicesPartner } from "../../components";

import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  const handleNavigateToContact = () => {
    navigate("/contact");
  };
  return (
    <section className="services">
      <section className="services-title-section animate__animated animate__fadeInDown">
        <h3>Our Exceptional Services to Elevate Your Driving Experience</h3>

        <p>
          At our car gallery, we take pride in offering a wide range of
          exceptional services designed to enhance your driving experience. From
          meticulous maintenance and personalized customization to flexible
          financing options, we are committed to exceeding your expectations.
          Explore our comprehensive services and let us take care of every
          aspect of your automotive needs, ensuring you enjoy the utmost
          comfort, performance, and style on the road.
        </p>
      </section>

      <div className="stick animate__animated animate__fadeInUp"></div>

      <section className="services-cards animate__animated animate__fadeInLeft">
        {services.map((service) => (
          <ServicesCard
            key={service.id}
            title={service.title}
            description={service.description}
            image={service.image}
          />
        ))}
      </section>

      <div className="stick animate__animated animate__fadeInUp"></div>

      <section className="service-partners-section animate__animated animate__fadeIn">
        <div className="service-partners-header">
          <h4>Partners</h4>
        </div>

        <div className="service-partners animate__animated animate__fadeInRight">
          {partners.map((partner) => (
            <ServicesPartner
              key={partner.id}
              logo={partner.logo}
              name={partner.name}
            />
          ))}
        </div>
      </section>

      <button onClick={handleNavigateToContact} className="contact-us-button">
        Contact Us
      </button>
    </section>
  );
};

export default Services;
