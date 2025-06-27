import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "aos/dist/aos.css";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <section
        className="max-w-11/12 mx-10 mt-26"
     
      >
        <Outlet></Outlet>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Root;
