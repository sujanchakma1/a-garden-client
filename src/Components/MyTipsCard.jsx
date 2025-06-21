import React from "react";

const MyTipsCard = ({ tips }) => {
  // console.log(tips);
  return (
    <div className="my-10  rounded-box border border-base-content/10 bg-base-100">
      <table className="table rounded-md ">
        {/* head */}
        <thead className="bg-gray-600">
          <tr>
            <th>Name</th>
            <th>title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody className="bg-base-200 rounded-md">
          {/* row 1 */}
          <tr>
            <td>
              <div className="flex items-center gap-3">
                <div >
                  <img src={tips.photo} alt="photo" className="rounded-full object-cover h-12 w-12"/>
                </div>
                <div>
                  <div className="font-bold">{tips.name}</div>
                  <div className="text-sm opacity-50">{tips.email}</div>
                </div>
              </div>
            </td>
            <td>{tips.title}</td>
            <td>{tips.category}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MyTipsCard;
