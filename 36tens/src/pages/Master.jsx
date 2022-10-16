import React from "react";
import styled from "styled-components";

import AdminNav from "../layout/AdminNav";
import AdminSideNav from "../layout/AdminSideNav";

const MasterContainer = styled.div`
  height: 100vh;
  width: 100%;
`;
const Master = () => {
  return (
    <MasterContainer>
      <AdminNav />
      <AdminSideNav />
    </MasterContainer>
  );
};

export default Master;
