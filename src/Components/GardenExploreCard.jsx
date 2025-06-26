import React from "react";

const GardenExploreCard = ({ gardeners }) => {
  // console.log(gardeners)
  return (
    <div className="bg-base-300 rounded-md  hover:shadow-2xl">
      <figure>
        <img
          src={gardeners.image}
          className="w-full h-[80%] object-cover rounded-md"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {gardeners.name}
          <div className="badge badge-secondary">{gardeners.age}</div>
        </h2>
        <h2 className="font-semibold">Experience: {gardeners.experiences}</h2>
        <h2 className="font-semibold">
          Share Tips: {gardeners.totalSharedTips}
        </h2>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{gardeners.status}</div>
          <div className="badge badge-outline">{gardeners.gender}</div>
        </div>
      </div>
    </div>
  );
};

export default GardenExploreCard;
