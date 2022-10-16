import React from "react";
import styled from "styled-components";
import { RiEditBoxLine } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";
import { AiOutlineUserSwitch, AiFillFileText } from "react-icons/ai";

const SideNavComponent = styled.div`
  width: 60px;
  height: calc(100% - 70px);
  border-right: 2px solid #edeff2;
  flex-direction: column;
  align-items: center;
  position: fixed;
  .circle {
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
  }
`;
const AdminSideNav = () => {
  const style = {
    fontSize: "1rem",
  };
  return (
    <SideNavComponent>
      <br />
      <div className="circle">
        <RiEditBoxLine style={{ style }} />
      </div>
      <div className="circle">
        <IoIosPeople style={{ style }} />
      </div>
      <div className="circle">
        <AiOutlineUserSwitch style={{ style }} />
      </div>
      <div className="circle">
        <AiFillFileText style={{ style }} />
      </div>
    </SideNavComponent>
  );
};

export default AdminSideNav;