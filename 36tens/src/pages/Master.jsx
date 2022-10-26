import React from "react";
import { Routes, Route } from "react-router-dom";

import AdminNav from "../layout/AdminNav";
import AdminSideNav from "../layout/AdminSideNav";
import Surveys from "./Surveys";
import "./Master.css";
import Workforce from "./Workforce";
import Dashboard from "./Dashboard";
import Competencies from "./Competencies";
import Questionier from "./Questionier";

const Master = () => {
  return (
    <div className="Master">
      <AdminNav />
      <AdminSideNav />
      <div className="masterwrapper">
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="survey" element={<Surveys />} />
          <Route path="workforce" element={<Workforce />} />
          <Route path="competencies" element={<Competencies />} />
          <Route path="questionier" element={<Questionier />} />
        </Routes>
      </div>
    </div>
  );
};

export default Master;
