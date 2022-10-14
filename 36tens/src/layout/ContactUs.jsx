import React from "react";
import styled from "styled-components";
import CustomButton from "../components/Custombutton";
import { InputContact } from "../components/input";

const ContactWrapper = styled.div`
  margin-top: 500px;
  height: 60vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;

  .contact {
    display: flex;
    flex-direction: column;
  }
  @media screen and (max-width: 1096px) {
    margin-top: 130%;
  }
  @media screen and (max-width: 767px) {
    margin-top: 310%;
  }
`;

const ContactUs = () => {
  return (
    <ContactWrapper>
      <div className="contact">
        <h2>Contact Us</h2>
        <InputContact type="text" placeholder="Full Name" required="required" />
        <select placeholder="Select Reason" required="required" />
        <textarea name="message" rows="10" cols="30">
          Description
        </textarea>
      </div>
      <CustomButton type={"normal textnormal"} width={"100px"} height={"35px"}>
        SUBMIT
      </CustomButton>
    </ContactWrapper>
  );
};

export default ContactUs;
