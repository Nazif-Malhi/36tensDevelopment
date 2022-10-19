import React from "react";
import ContactUs from "../layout/ContactUs";
import Home from "../layout/Home";
import Navbar from "../layout/Navbar";
import Packages from "../layout/Packages";
import Rights from "../layout/Rights";
import Services from "../layout/Services";

const Mockup = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Home id={"home"} />
      <Packages id={"pricing"} />
      <Services id={"services"} />
      <ContactUs id={"contact-us"} />
      <Rights />
    </React.Fragment>
  );
};

export default Mockup;
