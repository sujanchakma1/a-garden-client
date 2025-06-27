import { use, useEffect, useState } from "react";
import { AuthContext } from "../../Context/authContext";
import { useLoaderData } from "react-router";
import { FaUserFriends } from "react-icons/fa";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { GiFarmer } from "react-icons/gi";
import Aos from "aos";


const Overview = () => {
  const [myTips, setMyTips] = useState([]);
  const [allUsers, setAllUsers] = useState([]);

  const { user } = use(AuthContext);
  const gardeners = useLoaderData();
  useEffect(() => {
    fetch("https://a-garden-server.vercel.app/alltips")
      .then((res) => res.json())
      .then((data) => {
        setMyTips(data);
      });
  }, []);
  useEffect(() => {
    fetch("https://a-garden-server.vercel.app/users")
      .then((res) => res.json())
      .then((data) => {
        setAllUsers(data);
      });
  }, []);
  useEffect(() => {
      Aos.init({
        duration: 800,
        once: false,
      });
    }, []);

  return (
    <div data-aos="fade-up"  data-aos-anchor-placement="top-bottom">
      <h2 className="text-2xl font-semibold mb-6">Dashboard Overview</h2>

      {/* User Info */}
      <div className="bg-base-100 p-4 rounded shadow mb-10">
        <p>
          <strong>Name:</strong> {user?.displayName}
        </p>
        <p>
          <strong>Email:</strong> {user?.email}
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {/* Gardeners */}
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center hover:shadow-lg transition duration-300">
          <div className="mb-4">
            <GiFarmer className="text-orange-500 text-3xl" />
          </div>
          <h3 className="text-3xl font-semibold text-gray-700 mb-3">
            {gardeners.length}
          </h3>
          <p className="text-gray-500">All Gardeners</p>
        </div>
        {/* users */}
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center hover:shadow-lg transition duration-300">
          <div className="mb-4">
            <MdOutlineTipsAndUpdates className="text-orange-500 text-3xl" />
          </div>
          <h3 className="text-3xl font-semibold text-gray-700 mb-3">
            {myTips.length}
          </h3>
          <p className="text-gray-500">My Share Tips</p>
        </div>
        {/* users */}
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center hover:shadow-lg transition duration-300">
          <div className="mb-4">
            <FaUserFriends className="text-orange-500 text-3xl" />
          </div>
          <h3 className="text-3xl font-semibold text-gray-700 mb-3">
            {allUsers.length}
          </h3>
          <p className="text-gray-500">Active Users</p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
