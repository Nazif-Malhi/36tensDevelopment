import React from "react";
import styled from "styled-components";
import { BsPersonFill } from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";
import { Logo } from "../assets/images";
import {
  Nav,
  NavMenu,
  NavLink,
  NavBtnLink,
} from "../components/navbar/navelements";
import { MdOutlineCancel } from "react-icons/md";

const Navbar = styled.div`
  width: 100%;
  height: 70px;
  padding: 0 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  top: 0;
  left: 0;
  .left {
    width: 100%;
    padding-left: 20px;
    display: flex;
    .logo {
      width: 120px;
      height: auto;
    }
  }
  .right {
    display: flex;
    margin: auto 0;
    height: 100%;
    text-align: center;
    justify-content: center;
    align-items: center;
    .button {
      width: 160px;
      height: 100%;
      align-items: center;
      justify-content: center;
      align-items: center;
      display: flex;
      justify-content: center;
      cursor: pointer;
      p {
        margin: 0px;
        color: #c3cad9;
        font-weight: 500;
      }
    }
    .button:hover {
      background-color: #34485f;
    }

    .circle {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      background-color: #c3cad9;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      text-align: center;
      color: white;
      font-size: small;
      margin: 5px;
    }
    .notification {
      display: flex;
      align-items: center;
      justify-content: space-between;
      text-align: center;
      .circle {
        background-color: white;
      }
    }
  }
`;
const AltNavLink = styled(NavLink)`
  font-weight: 500;
`;
const NotificationsIcon = styled(IoIosNotifications)`
  color: #b9c0c9;
  :hover {
    color: white;
  }
`;

const AdminNav = () => {
  return (
    <Navbar>
      <div className="left">
        <img className="logo" src={Logo} alt="logo" />
        <Nav>
          <NavMenu>
            <AltNavLink to="/">About Us</AltNavLink>
            <AltNavLink to="/contact-us">Contact Us</AltNavLink>
          </NavMenu>
        </Nav>
      </div>
      <div className="right">
        <div className="button">
          <div className="circle">
            <BsPersonFill />
          </div>
          <div className="text">
            <p>Jan Doe</p>
          </div>
        </div>
        {/* <div className="notification">
          <div className="circle">
            <NotificationsIcon
              style={{ fontSize: "1.5rem", color: "#C3CAD9" }}
            />
          </div>
          <div className="circle">
            <MdOutlineCancel style={{ fontSize: "1.5rem", color: "#C3CAD9" }} />
          </div>
        </div> */}
      </div>
    </Navbar>
  );
};

export default AdminNav;
