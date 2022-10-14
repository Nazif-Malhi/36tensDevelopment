import React from "react";
import { Outlet } from "react-router-dom";
import MainPage from "../pages/MainPage";

const useAuth = () => {
  const user = { loggedIn: false };
  return user && user.loggedIn;
};
const ProtectedRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <MainPage />;
};

export default ProtectedRoutes;
