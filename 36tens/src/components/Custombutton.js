import React from "react";
import styled from "styled-components";

const ButtonStyle = styled.div`
  .default {
    margin-left: -100%;
    background: #a600a0;
    border-radius: 7px;
    border: none;
    :hover {
      background: #232340;
    }
  }
  .bold {
    color: #ffffff;
    font-size: 13px;
    font-weight: bold;
  }
  .normal {
    background: #a600a0;
    border-radius: 7px;
    border: none;
    :hover {
      background: #232340;
    }
  }
  .textnormal {
    color: #ffffff;
  }
`;

const CustomButton = ({ type, children, width, height, ...props }) => {
  return (
    <ButtonStyle>
      <button
        className={type}
        {...props}
        style={{ width: width, height: height }}
      >
        {children}
      </button>
    </ButtonStyle>
  );
};

export default CustomButton;
