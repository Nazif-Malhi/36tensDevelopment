import React from "react";
import ContactUs from "../layout/ContactUs";
import Home from "../layout/Home";
import Navbar from "../layout/Navbar";
import Packages from "../layout/Packages";
import Rights from "../layout/Rights";
import Services from "../layout/Services";

const MainPage = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Home />
      <Packages />
      <Services />
      <ContactUs />
      <Rights />
    </React.Fragment>
  );
};

export default MainPage;
