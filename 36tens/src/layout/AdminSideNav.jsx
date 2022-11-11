import React, { useState } from "react";
import styled from "styled-components";
import { RiEditBoxLine } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";
import { AiOutlineUserSwitch, AiFillFileText } from "react-icons/ai";
import { MdOutlineDashboard } from "react-icons/md";
import { BsFiles } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const SideNavComponent = styled.div`
  width: 60px;
  height: calc(100% - 70px);
  border-right: 2px solid #edeff2;
  flex-direction: column;
  align-items: center;
  display: flex;
  position: fixed;
  .isActive {
    background: #9c27b0;
    color: white;
    :hover {
      background: #9c27b0;
      color: white;
    }
  }

  .box{
    width
  }
`;

const Circle = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  text-align: center;
  color: #80858e;
  margin: 5px;
  font-size: 1.2rem;
  :hover {
    background: #232340;
    color: white;
  }
`;

const AdminSideNav = () => {
  const [isActive, setActive] = useState("");
  const handleIsActive = (val) => {
    setActive(val);
  };
  const style = {};
  return (
    <SideNavComponent>
      <br />

      <Circle
        to="dashboard"
        className={isActive === "dashboard" ? "isActive" : ""}
        onClick={() => {
          handleIsActive("dashboard");
        }}
      >
        <MdOutlineDashboard style={style} />
      </Circle>

      <Circle
        to="workforce"
        className={isActive === "workforce" ? "isActive" : ""}
        onClick={() => {
          handleIsActive("workforce");
        }}
      >
        <IoIosPeople style={{ style }} />
      </Circle>

      <Circle
        to="survey"
        className={isActive === "survey" ? "isActive" : ""}
        onClick={() => {
          handleIsActive("survey");
        }}
      >
        <BsFiles style={{ style }} />
      </Circle>

      {/* <Circle
        to="competencies"
        className={isActive === "competencies" ? "isActive" : ""}
        onClick={() => {
          handleIsActive("competencies");
        }}
      >
        <RiEditBoxLine style={{ style }} />
      </Circle> */}

      <Circle
        to="master"
        className={isActive === "master" ? "isActive" : ""}
        onClick={() => {
          handleIsActive("master");
        }}
      >
        <AiOutlineUserSwitch style={{ style }} />
      </Circle>
      <div className="box">
        <ul>
          <li>
            Groups
          </li>
          <li>
            Department
          </li>
          <li>
            Designation
          </li>
        </ul>
      </div>
      <Circle
        to="questionier"
        className={isActive === "questionier" ? "isActive" : ""}
        onClick={() => {
          handleIsActive("questionier");
        }}
      >
        <AiFillFileText style={{ style }} />
      </Circle>
    </SideNavComponent>
  );
};

export default AdminSideNav;
