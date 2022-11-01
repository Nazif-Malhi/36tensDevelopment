import React from "react";
import { Route, Navigate, Routes } from "react-router-dom";

const RouteGuard = ({ children }) => {
  function hasJWT() {
    let flag = false;

    //check user has JWT token
    localStorage.getItem("token") ? (flag = true) : (flag = false);

    return flag;
  }

  return hasJWT() ? children : <Navigate to="/authentication/login" />;
};

export default RouteGuard;
