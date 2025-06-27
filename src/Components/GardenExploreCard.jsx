import React from "react";
import { Link } from "react-router";

const GardenExploreCard = ({ gardeners }) => {
  // console.log(gardeners)
  return (
    <div className="card bg-base-100 shadow-md border hover:shadow-lg transition-all">
      <figure className="p-4">
        <img
          src={gardeners.image}
          alt={gardeners.name}
          className="w-full h-48 object-cover rounded-md"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{gardeners.name}</h2>
        <p className="text-sm">{gardeners.title}</p>
        <p className="text-xs text-gray-500">{gardeners.description}</p>
        <div className="card-actions justify-end">
          <Link
            to={`/gardeners/details/${gardeners._id}`}
            className="btn btn-outline btn-sm btn-primary rounded-full mx-5"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GardenExploreCard;
