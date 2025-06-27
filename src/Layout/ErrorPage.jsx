import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Helmet } from "react-helmet-async";

const ErrorPage = () => {
  return (
    <div>
      <Helmet>
        <title>A Garden || Error</title>
      </Helmet>
      <Navbar></Navbar>
      <div className="min-h-screen flex justify-center items-center my-26">
        <img
          className="w-full h-[750px]"
          src="https://i.ibb.co.com/d4k7xSq0/Errores-Web-404-403-503-502-401-Significado-y-soluciones-1.jpg"
          alt=""
        />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;
