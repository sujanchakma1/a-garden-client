import React, { use } from "react";
import GardenExploreCard from "./GardenExploreCard";
import { Helmet } from "react-helmet-async";

const gardenPromise = fetch("https://a-garden-server.vercel.app/allGardeners").then((res) =>
  res.json()
);
const GardenExplore = () => {
  const allGardeners = use(gardenPromise);
  return (
    <div className="my-10">
      <Helmet>
        <title>A Garden || Garden Explore</title>
      </Helmet>
      <h2 className="text-2xl font-bold text-center mb-10">
        Explore Gardeners
      </h2>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-10 space-y-5">
        {allGardeners.map((gardeners) => (
          <GardenExploreCard
            key={gardeners._id}
            gardeners={gardeners}
          ></GardenExploreCard>
        ))}
      </div>
    </div>
  );
};

export default GardenExplore;
