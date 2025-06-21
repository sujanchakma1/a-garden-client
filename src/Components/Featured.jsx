import React, { use } from "react";
import FeaturedCard from "./FeaturedCard";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";
import { Fade, Slide } from "react-awesome-reveal";
const featuredPromise = fetch("https://a-garden-server.vercel.app/gardeners").then((res) =>
  res.json()
);
const Featured = () => {
  const featuredData = use(featuredPromise);
  // console.log(featuredData);
  return (
    <div className="my-10 space-y-10 p-8 bg-gradient-to-r	from-blue-500 via-teal-400 to-green-500 rounded-md text-gray-800">
      <Slide>
        <h2 className="text-2xl font-bold text-center">Featured Gardeners</h2>
      </Slide>
      <Fade delay={1e3} cascade damping={1e-1}>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-10">
          {featuredData.map((featured) => (
            <FeaturedCard key={featured._id} featured={featured}></FeaturedCard>
          ))}
        </div>
      </Fade>

      <div className="text-center">
        <Link to="/garden/explore" className="btn btn-active btn-success">
          Explore All Gardeners <FaArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default Featured;
