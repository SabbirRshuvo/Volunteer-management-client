import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";

const Main = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      <Navbar />
      <div className="flex-1  px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 mt-18 bg-slate-100">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
