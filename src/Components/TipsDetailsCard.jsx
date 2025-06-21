import React, { useState } from "react";
import { BiLike } from "react-icons/bi";
import { SlLike } from "react-icons/sl";

const TipsDetailsCard = ({ tips }) => {
  const [like, setLike] = useState(tips.LikeCount || 0);

  const handleLike = async (id) => {
    const res = await fetch(`https://a-garden-server.vercel.app/tips/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await res.json();
    if (data.modifiedCount > 0) {
      setLike((prev) => prev + 1);
    }
  };
  return (
    <div className="card card-side bg-base-200 shadow-md hover:shadow-2xl p-5">
      <figure>
        <img src={tips.photo} alt="Movie" className="rounded-md" />
      </figure>
      <div className="card-body">
        <div className="flex gap-2 items-center">
          <h1 className="card-title">Author: </h1>
          <h2 className="font-semibold text-gray-600">
            {tips.name} <br /> {tips.email}
          </h2>
        </div>
        <p className="flex gap-2 items-center">
          <span className="card-title">Plant Type:</span>
          <span className="font-semibold text-gray-600">{tips.plantType}</span>
        </p>
        <p className="flex gap-2 items-center">
          <span className="card-title">Difficulty Level:</span>
          <span className="badge badge-outline text-gray-600">
            {tips.difficultyLevel}
          </span>
        </p>
        <p className="flex gap-2 items-center">
          <span className="card-title">Category:</span>
          <span className="badge badge-outline text-gray-600">
            {tips.category}
          </span>
        </p>
        <p className="flex gap-2 items-center">
          <span className="card-title">LikeCount:</span>
          <span className="font-semibold">{like}</span>
        </p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleLike(tips._id)}
            className="btn btn-primary"
          >
            <SlLike size={28} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TipsDetailsCard;
