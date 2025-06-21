import React, { use } from "react";
import { AuthContext } from "../Context/authContext";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const ShareGardenTips = () => {
  const { user } = use(AuthContext);
  const handleSubmitTips = (e) => {
    e.preventDefault();
    const form = e.target;
    const formdata = new FormData(form);
    const tipsData = Object.fromEntries(formdata.entries());
    // console.log(tipsData);
    fetch("https://a-garden-server.vercel.app/tips", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(tipsData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Tips Submit Successfully!",
            icon: "success",
            position: "top-end",
            showConfirmButton: false,
            timer: 1500,
          });
          e.target.reset();
        }
      });
  };
  return (
    <div>
      <Helmet>
        <title>A Garden || Share Tips</title>
      </Helmet>
      <form
        onSubmit={handleSubmitTips}
        className="fieldset bg-base-200 max-w-md mx-auto my-10 border-base-300 rounded-box border p-4"
      >
        <div className="text-center my-3">
          <h2 className="font-bold text-center text-2xl">Share Garden Tips</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <legend className="fieldset-legend">Email</legend>
            <input
              type="text"
              name="email"
              className="input w-full"
              placeholder="Email "
              value={user.email}
              readOnly
            />
          </div>
          <div>
            <legend className="fieldset-legend">Name</legend>
            <input
              type="text"
              name="name"
              className="input w-full"
              placeholder="Name"
              value={user.displayName}
              readOnly
            />
          </div>
          <div>
            <legend className="fieldset-legend">Title</legend>
            <input
              type="text"
              name="title"
              required
              className="input w-full"
              placeholder="Title "
            />
          </div>
          <div>
            <legend className="fieldset-legend">Photo-URL</legend>
            <input
              type="text"
              name="photo"
              required
              className="input w-full"
              placeholder="Photo-URL"
            />
          </div>

          <div>
            <legend className="fieldset-legend">Plant Type</legend>
            <textarea
              placeholder="Plant Type"
              required
              className="textarea textarea-xs w-full"
              name="plantType"
            ></textarea>
          </div>
          <div>
            <legend className="fieldset-legend">Description</legend>
            <textarea
              placeholder="Description"
              required
              className="textarea textarea-xs w-full"
              name="description"
            ></textarea>
          </div>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Difficulty Level</legend>
            <select
              name="difficultyLevel"
              required
              defaultValue=""
              className="select w-full"
            >
              <option disabled value="">
                Select a level
              </option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Category</legend>
            <select
              name="category"
              required
              defaultValue=""
              className="select w-full"
            >
              <option disabled value="">
                Select a category
              </option>
              <option value="Composting">Composting</option>
              <option value="Plant Care">Plant Care</option>
              <option value="Vertical Gardening">Vertical Gardening</option>
              <option value="Etc.">Etc.</option>
            </select>
          </fieldset>
        </div>
        <fieldset className="fieldset mt-4">
          <legend className="fieldset-legend">Availability</legend>
          <select
            name="availability"
            required
            defaultValue=""
            className="select w-full"
          >
            <option disabled value="">
              Select availability
            </option>
            <option value="Public">Public</option>
            <option value="Hidden">Private</option>
          </select>
        </fieldset>
        <button className="btn btn-active btn-success">Submit</button>
      </form>
    </div>
  );
};

export default ShareGardenTips;
