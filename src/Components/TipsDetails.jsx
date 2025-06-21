import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import TipsDetailsCard from "./TipsDetailsCard";
import { Helmet } from "react-helmet-async";

const TipsDetails = () => {
  const [tipsDetails, setTipsDetails] = useState([]);
  const { id } = useParams();
  const data = useLoaderData();
  // console.log(id, data)
  useEffect(() => {
    const singleData = data.find((newData) => newData._id == id);
    setTipsDetails(singleData);
  }, [data, id]);
  // console.log(tipsDetails);
  return (
    <div className="my-10 space-y-5">
      <Helmet>
        <title>A Garden || Tips Details</title>
      </Helmet>
      <h2 className="text-2xl font-bold text-center ">Tips Details</h2>
      <TipsDetailsCard
        key={tipsDetails._id}
        tips={tipsDetails}
      ></TipsDetailsCard>
    </div>
  );
};

export default TipsDetails;
