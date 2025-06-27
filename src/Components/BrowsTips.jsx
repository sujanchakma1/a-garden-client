import React, { use, useState } from "react";
import { Helmet } from "react-helmet-async";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Link } from "react-router";

const tipsPromise = fetch("https://a-garden-server.vercel.app/tips").then((res) =>
  res.json()
);

const BrowsTips = () => {
  const tipsData = use(tipsPromise);
  const [selectedDifficulty, setSelectedDifficulty] = useState("");

  const sortedTips = [...tipsData].sort((a, b) => {
    if (!selectedDifficulty) return 0;
    const aIsSelected = a.difficultyLevel === selectedDifficulty ? 0 : 1;
    const bIsSelected = b.difficultyLevel === selectedDifficulty ? 0 : 1;
    return aIsSelected - bIsSelected;
  });

  return (
    <div className="my-10 space-y-5" data-aos="fade-up"  data-aos-anchor-placement="top-bottom">
      <Helmet>
        <title>A Garden || Brows Tips</title>
      </Helmet>
      <h2 className="text-2xl font-bold text-center">Browse Tips</h2>

      <div className="flex justify-end">
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Difficulty Level</legend>
          <select
            name="difficultyLevel"
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
            className="select w-full"
          >
            <option value="">All Levels</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </fieldset>
      </div>

      <table className="md:table table-sm rounded-box border border-base-content/10 bg-base-100">
        <thead className="bg-gray-500">
          <tr>
            <th>Tips</th>
            <th>Title</th>
            <th>Category</th>
            <th>Image</th>
            <th>Difficulty Level</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="bg-base-200">
          {sortedTips.map((tips, index) => (
            <tr key={tips._id}>
              <th>{index + 1}</th>
              <td>{tips.title}</td>
              <td>{tips.category}</td>
              <td className="flex gap-5 items-center text-center">
                <img className="w-16" src={tips.photo} alt="" />
              </td>
              <td>{tips.difficultyLevel}</td>
              <td className="items-center">
                <Link
                  to={`/tips/details/${tips._id}`}
                  className="text-blue-300"
                >
                  <MdOutlineRemoveRedEye size={24} />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BrowsTips;
