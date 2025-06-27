import React, { use, useEffect } from "react";
import FeaturedCard from "./FeaturedCard";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";
import { Fade } from "react-awesome-reveal";
import Aos from "aos";
const featuredPromise = fetch("https://a-garden-server.vercel.app/gardeners").then((res) =>
  res.json()
);
const Featured = () => {
  const featuredData = use(featuredPromise);
  // console.log(featuredData);
  useEffect(() => {
      Aos.init({
        duration: 800,
        once: false,
      });
    }, []);
  return (
    <div className="my-10 space-y-10" data-aos="fade-up"  data-aos-anchor-placement="top-bottom">
        <h2 className="text-2xl font-bold text-center">Featured Gardeners</h2>
      <Fade delay={10} cascade damping={1e-1}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10">
          {featuredData.map((featured) => (
            <FeaturedCard key={featured._id} featured={featured}></FeaturedCard>
          ))}
        </div>
      </Fade>

      <div className="text-center">
        <Link to="/garden/explore" className="btn btn-outline btn-primary rounded-full px-5">
          Explore All Gardeners <FaArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default Featured;
