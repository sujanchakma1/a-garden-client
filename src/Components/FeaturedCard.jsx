import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

const FeaturedCard = ({ featured }) => {
  // console.log(featured);
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="card bg-base-200 shadow-md hover:shadow-xl"
    >
      <figure className="px-10 pt-10">
        <img src={featured.image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{featured.title}</h2>
        <p>{featured.description}</p>
        <div className="card-actions">
          <Link to={`/gardeners/details/${featured._id}`}>
            <button className="btn btn-primary rounded-full px-5">
              See More
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedCard;
