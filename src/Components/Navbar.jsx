import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { HiMenuAlt1 } from "react-icons/hi";
import { AuthContext } from "../Context/authContext";
import Swal from "sweetalert2";
import DarkModeToggle from "./DarkModeToggle";
import { Tooltip } from "react-tooltip";
import AGardenLogo from "../Shared/AGardenLogo";

const Navbar = () => {
  const { user, logOutUser } = use(AuthContext);
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/garden/explore">Explore Gardeners</NavLink>
      </li>
      <li>
        <NavLink to="/garden/browsTips">Browse Tips</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/garden/shareTips">Share A Garden Tips</NavLink>
          </li>
          <li>
            <NavLink to="/garden/myTips">My Tips</NavLink>
          </li>
        </>
      )}
    </>
  );
  const handleLogOut = () => {
    logOutUser()
      .then(() => {
        Swal.fire({
          title: "Successfully Log Out!",
          icon: "success",
          position: "top-end",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
        });
      });
  };
  return (
    <div className="bg-gradient-to-r from-emerald-600 items-center via-green-400 to-lime-400 text-white fixed w-full top-0 z-50">
      <div className="navbar flex justify-between items-center w-11/12 mx-auto">
        <div className="flex items-center">
          <div className="dropdown items-center">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <HiMenuAlt1 size={24} />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-gray-400 rounded-box z-1 mt-3 w-52 p-2 shadow flex gap-5"
            >
              {links}
            </ul>
          </div>
          <AGardenLogo></AGardenLogo>
        </div>

        <div className="flex items-center gap-4">
          <div className=" hidden lg:flex ">
            <ul className="menu menu-horizontal flex gap-3 px-1">{links}</ul>
          </div>
          <div>
            <DarkModeToggle></DarkModeToggle>
          </div>
          {user ? (
            <div className="dropdown items-center relative group">
              <div tabIndex={0} role="button" className="cursor-pointer">
                <a className="my-anchor-element">
                  <img
                    className={`w-12 h-12 rounded-full hover:${user.name} object-cover`}
                    src={user.photoURL}
                    alt="Profile"
                  />
                </a>
                <Tooltip anchorSelect=".my-anchor-element" place="top">
                  {user.displayName}
                </Tooltip>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 -left-38 shadow flex gap-5"
              >
                <li
                  onClick={handleLogOut}
                  className="btn btn-active btn-success"
                >
                  Log Out
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex gap-5">
              <Link
                to="/auth/login"
                className="btn btn-outline btn-primary rounded-full px-5"
              >
                Login
              </Link>
              <Link
                to="/auth/register"
                className="btn btn-active btn-primary rounded-full px-5"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
