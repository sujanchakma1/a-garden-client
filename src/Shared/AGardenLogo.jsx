import React from "react";
import gardenLogo from "../assets/a-garden-logo.png";

const AGardenLogo = () => {
  return (
    <div className="flex items-center">
      <img className="w-16" src={gardenLogo} alt="" />
      <h2 className="font font-bold text-3xl mt-1">A Garden</h2>
    </div>
  );
};

export default AGardenLogo;
