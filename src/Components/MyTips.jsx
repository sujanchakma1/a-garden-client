import React, { use, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router";
import Swal from "sweetalert2";

const tipsPromise = fetch("https://a-garden-server.vercel.app/alltips").then((res) =>
  res.json()
);

const MyTips = () => {
  const initialTips = use(tipsPromise);
  const [allTips, setAllTips] = useState(initialTips);
  const handleTipsDelete = (id) => {
    Swal.fire({
      title: "Do you want to delete this tip?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Delete",
      denyButtonText: `Don't Delete`,
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://a-garden-server.vercel.app/tips/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log("after delete", data);
            if (data.deletedCount) {
              const remainingTips = allTips.filter(
                (singleTips) => singleTips._id !== id
              );
              setAllTips(remainingTips);
              Swal.fire("Deleted!", "Your tip has been deleted.", "success");
            }
          });
      } else if (result.isDenied) {
        Swal.fire("Tip was not deleted.", "", "info");
      }
    });
  };

  return (
    <div className="overflow-x-auto my-10 space-y-10">
      <Helmet>
        <title>A Garden || My Tips</title>
      </Helmet>
      <h2 className="text-2xl font-bold text-center ">My Share Tips</h2>
      {allTips.length === 0 ? (
        <div className="text-center items-center space-y-5 p-10 bg-amber-200 rounded-2xl">
          <h2 className="text-2xl font-semibold">
            You haven't shared any Tips yet.!
          </h2>
          <h2 className="text-2xl font-bold">Please Share A Tips</h2>
          <Link to="/garden/shareTips">
            {" "}
            <button className="btn btn-active btn-success">Share Tips</button>
          </Link>
        </div>
      ) : (
        <table className="md:table table-sm  rounded-box border border-base-content/10">
          <thead className="text-center">
            <tr>
              <th>Tips</th>
              <th>Author</th>
              <th>Title</th>
              <th>PlantType</th>
              <th>Description</th>
              <th>DifficultyLevel</th>
              <th>Category</th>
              <th>Availability</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="bg-base-200">
            {allTips.map((tips, index) => (
              <tr key={index} className="items-center text-center">
                <th>{index + 1}</th>
                <td className="flex gap-2 items-center">
                  <div>
                    <img
                      src={tips.photo}
                      alt="Avatar Tailwind CSS Component"
                      className="rounded-md object-cover h-12 w-12"
                    />
                  </div>
                  <div>
                    {tips.name} <br />
                    {tips.email}
                  </div>
                </td>
                <td>{tips.title}</td>
                <td>{tips.plantType}</td>
                <td>{tips.description}</td>
                <td>{tips.difficultyLevel}</td>
                <th>{tips.category}</th>
                <th>{tips.availability}</th>
                <td className="flex gap-8 items-center text-center">
                  <div>
                    <Link to={`/tips/update/${tips._id}`}>
                      {" "}
                      <FaRegEdit size={18} />
                    </Link>
                  </div>
                  <div>
                    <button
                      onClick={() => handleTipsDelete(tips._id)}
                      className="cursor-pointer"
                    >
                      {" "}
                      <RiDeleteBin6Line size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MyTips;
