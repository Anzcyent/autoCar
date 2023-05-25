import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <section className="contact">
      <h3 className="animate__animated animate__fadeIn">
        Contact Us For More Information
      </h3>

      <div className="contact-info animate__animated animate__zoomIn">
        <p>
          <span style={{ fontWeight: "bold" }}>Address:</span> 1234 st. Türkiye
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>Phone:</span> +90 123 456 7890
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>Email:</span>{" "}
          ozcancihan714@gmail.com
        </p>
      </div>

      <form className="contact-form animate__animated animate__zoomIn">
        <input type="text" placeholder="Your name" />
        <textarea cols="30" rows="10" placeholder="Your message"></textarea>
        <button>Send</button>
      </form>
    </section>
  );
};

export default Contact;
