import React, { use } from "react";

const trendingTipsPromise = fetch("https://a-garden-server.vercel.app/trendingTips").then(
  (res) => res.json()
);
const TrendingTips = () => {
  const trendingTips = use(trendingTipsPromise);
  return (
    <div>
      <h2 className="font-bold text-3xl text-center">Trending Tips</h2>
      <div className="my-10 overflow-x-auto rounded-box border border-base-content/10 bg-base-100">
        <table className="md:table table-sm items-center text-center">
          {/* head */}
          <thead className="bg-gray-500 ">
            <tr>
              <th>Author</th>
              <th>Plant Type</th>
              <th>Description</th>
              <th>Difficulty Level</th>
              <th>Like Count</th>
            </tr>
          </thead>
          <tbody className="bg-base-200">
            {trendingTips.map((tips) => (
              <tr key={tips._id}>
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
                <td>{tips.plantType}</td>
                <td>{tips.description}</td>
                <td>{tips.difficultyLevel}</td>
                <td>{`${tips.LikeCount > 0 ? tips.LikeCount : 0}`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TrendingTips;
