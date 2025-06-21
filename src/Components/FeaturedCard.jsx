import React from "react";
import { motion } from "framer-motion";

const FeaturedCard = ({ featured }) => {
  // console.log(featured);
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="card bg-base-200 shadow-md hover:shadow-xl"
    >
      <div className="card flex text-lime-700 bg-green-200 hover:shadow-2xl">
        <div className="card-body text-center items-center">
          <h2 className="card-title">Name: {featured.name}</h2>
          <h2 className="card-title">Age: {featured.age}</h2>
          <h2 className="card-title">Experience: {featured.experiences}</h2>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedCard;
