import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ToastContainer, toast } from "react-toastify";
import "./home-style.css";
import Products from "../Products/products-page";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Products />
      <ToastContainer position="bottom-right" hideProgressBar theme="colored" />
      <Outlet />
    </div>
  );
};

export default Home;
