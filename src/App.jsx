import React from "react";
import { Navbar } from "./components";
import { Home, Cars, Services, Contact } from "./pages";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cars" element={<Cars />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
