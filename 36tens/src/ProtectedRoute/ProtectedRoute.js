import React from "react";
import { Navigate, Outlet } from "react-router-dom";
const ProtectedRoute = ({ isAuth, children }) => {
  if (!isAuth) {
    return <Navigate to="/admin" />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
