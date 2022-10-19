import React from "react";
import { Logo } from "../assets/images";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  ButtonWrapper,
} from "../components/navbar/navelements";

const Navbar = () => {
  return (
    <Nav>
      <NavLink to="/">
        <img src={Logo} alt="logo" />
      </NavLink>
      <Bars />
      <NavMenu>
        <NavLink
          to="home"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          style={{ color: "#202BA3" }}
        >
          Home
        </NavLink>
        <NavLink
          to="pricing"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          Pricing
        </NavLink>
        <NavLink
          to="services"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          Services
        </NavLink>
        <NavLink
          to="contact-us"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          Contact Us
        </NavLink>
      </NavMenu>
      <ButtonWrapper>
        <NavBtn>
          <NavBtnLink to="/authentication/login">LogIn</NavBtnLink>
        </NavBtn>
        <NavBtn>
          <NavBtnLink to="/authentication/signup">SignUp</NavBtnLink>
        </NavBtn>
      </ButtonWrapper>
    </Nav>
  );
};

export default Navbar;
