import React from "react";
import { Route, useNavigate } from "react-router-dom";
const PrivateRoute = ({ children, ...rest }) => {
  const redirect = useNavigate();
  let auth = { token: false };
  return <Route {...rest}>{!auth.token ? redirect("/") : children}</Route>;
};

export default PrivateRoute;
