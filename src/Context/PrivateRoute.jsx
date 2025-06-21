import React, { use } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "./authContext";
import Loading from "../Components/Loading";

const PrivateRoute = ({ children }) => {
  const { user,loading } = use(AuthContext);
  const location = useLocation()
  if(loading){
    return <Loading></Loading>
  }
  if (!user) {
   return <Navigate state={location.pathname} to="/auth/login"></Navigate>
  }
  return children;
};

export default PrivateRoute;
