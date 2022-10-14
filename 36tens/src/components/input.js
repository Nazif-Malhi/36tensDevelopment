import React from "react";
import styled from "styled-components";

export const InputRound = styled.input`
  width: 300px;
  height: 40px;
  background: rgba(216, 216, 216, 0.1);
  border: 2px solid rgba(35, 35, 64, 0.31);
  border-radius: 4px;
  @media screen and (max-width: 455px) {
    width: 235px;
  }
  @media screen and (max-width: 345px) {
    width: 150px;
  }
`;

export const InputContact = styled.input`
  width: 100%;
  height: 40px;
  background: rgba(216, 216, 216, 0.1);
  border: 2px solid rgba(35, 35, 64, 0.31);
  border-radius: 4px;
  @media screen and (max-width: 455px) {
    width: 235px;
  }
  @media screen and (max-width: 345px) {
    width: 150px;
  }
`;
