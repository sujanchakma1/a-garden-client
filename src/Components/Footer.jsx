import React from "react";
import { FaFacebook, FaGithub, FaInstagramSquare } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import AGardenLogo from "../Shared/AGardenLogo";

const Footer = () => {

  return (
    <footer className="footer footer-horizontal footer-center bg-gradient-to-r from-emerald-300 items-center via-green-700 to-lime-600 text-white rounded p-10">
      <div className="grid grid-cols-3 gap-20 text-center items-center">
        <div>
          <nav className="grid menu grid-col gap-2">
            <h6 className="footer-title">Contact</h6>
            <a>
              E-mail: <span className="link link-hover">sujan@gmail.com</span>
            </a>
            <a>
              Phone: <span className="link link-hover">01571310000</span>
            </a>
          </nav>
        </div>
        <div>
          <nav className="grid menu grid-col gap-2 text-center items-center">
            <h6 className="footer-title">Site</h6>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/garden/explore">Explore Gardeners</Link>
              </li>
              <li>
                <Link to="/garden/browsTips">Browse Tips</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <div className="grid grid-col gap-5">
            <h6 className="footer-title">Social</h6>
            <div className="flex gap-5">
              <a href="https://www.facebook.com/">
                <FaFacebook size={24} />
              </a>
              <a href="https://www.instagram.com/">
                <FaInstagramSquare size={24} />
              </a>
              <a href="https://github.com/">
                <FaGithub size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <aside className="flex items-center">
        <p className="font-semibold">
          Copyright © {new Date().getFullYear()} - All right reserved by
        </p>
        <AGardenLogo></AGardenLogo>
      </aside>
    </footer>
  );
};

export default Footer;
