import React from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

import AdminNav from "../layout/AdminNav";
import AdminSideNav from "../layout/AdminSideNav";
import Surveys from "./Surveys";
import "./Master.css";
import Workforce from "./Workforce";

const Master = () => {
  return (
    <div className="Master">
      <AdminNav />
      <AdminSideNav />
      <div className="masterwrapper">
        <Routes>
          <Route path="survey" element={<Surveys />} />
          <Route path="workforce" element={<Workforce />} />
        </Routes>
      </div>
    </div>
  );
};

export default Master;
