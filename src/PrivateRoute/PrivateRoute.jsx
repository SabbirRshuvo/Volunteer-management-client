import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router";
import Loading from "../Components/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();

  if (loading) return <Loading />;

  if (user) return children;

  return <Navigate to="/login" state={location.pathname} />;
};

export default PrivateRoute;
