import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

export const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

const UseAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = useContext(AuthContext);
  useEffect(() => {
    axiosSecure.interceptors.response.user(
      (res) => {
        return res;
      },
      async (error) => {
        console.log(error);
        if (error.response.status === 400 || error.response.status === 401) {
          logOut();
          navigate("/login");
        }
      }
    );
  }, [logOut, navigate]);

  return axiosSecure;
};

export default UseAxiosSecure;
