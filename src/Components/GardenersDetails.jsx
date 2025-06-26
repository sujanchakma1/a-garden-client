import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";

const GardenersDetails = () => {
  const [gardeners, setGardeners] = useState("");
  const { id } = useParams();
  const data = useLoaderData();
  useEffect(() => {
    const findGardeners = data.find((garden) => garden._id == id);
    setGardeners(findGardeners);
  }, [id, data]);
  console.log(gardeners);

  return (
    <div className="flex justify-center items-center my-10 ">
      
      <div className="card card-side max-w-lg bg-base-100 shadow-md">
        <figure>
          <img
            src={gardeners.image}
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{gardeners.title}</h2>
          <h2 className="font-medium">Name : <span className="text-gray-500">{gardeners.name}</span></h2>
          <h2 className="font-medium">Tips Share : <span className="text-gray-500">{gardeners.totalSharedTips}</span></h2>
          <h2 className="font-medium">Age : <span className="text-gray-500">{gardeners.age}</span></h2>
          <p>{gardeners.description}</p>
          
        </div>
      </div>
    </div>
  );
};

export default GardenersDetails;
