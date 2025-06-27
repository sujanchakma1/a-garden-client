import React, { useEffect, useState } from "react";
import GardenExploreCard from "./GardenExploreCard";
import { Helmet } from "react-helmet-async";
import Aos from "aos";


const GardenExplore = () => {
  const [items, setItems] = useState([]);
  const [sortedItems, setSortedItems] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [filterGender, setFilterGender] = useState("all");

  useEffect(() => {
    // Replace this with API call if needed
    fetch("https://a-garden-server.vercel.app/allGardeners") // or use your data directly
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setSortedItems(data);
      });
  }, []);

  useEffect(() => {
    let filtered = [...items];

    if (filterGender !== "all") {
      filtered = filtered.filter((item) => item.gender === filterGender);
    }

    const sorted = filtered.sort((a, b) =>
      sortOrder === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );

    setSortedItems(sorted);
  }, [sortOrder, filterGender, items]);

  useEffect(() => {
      Aos.init({
        duration: 800,
        once: false,
      });
    }, []);

  return (
    <div className="my-10" data-aos="fade-up"  data-aos-anchor-placement="top-bottom">
      <Helmet>
        <title>A Garden || Garden Explore</title>
      </Helmet>
      <h2 className="text-5xl font-bold mb-4 text-center">All Gardeners</h2>

      {/* Sorting & Filtering Controls */}
      <div className="flex flex-wrap gap-4 mb-6">
        <select
          className="select select-bordered"
          onChange={(e) => setSortOrder(e.target.value)}
          value={sortOrder}
        >
          <option value="asc">Sort by Name (A-Z)</option>
          <option value="desc">Sort by Name (Z-A)</option>
        </select>

        <select
          className="select select-bordered"
          onChange={(e) => setFilterGender(e.target.value)}
          value={filterGender}
        >
          <option value="all">Filter: All</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {sortedItems.map((gardeners) => (
          <GardenExploreCard
            key={gardeners._id}
            gardeners={gardeners}
          ></GardenExploreCard>
        ))}
      </div>
    </div>
  );
};

export default GardenExplore;
