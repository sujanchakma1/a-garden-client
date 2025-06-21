import React from "react";
import { FaFacebook, FaGithub, FaInstagramSquare } from "react-icons/fa";
import { NavLink } from "react-router";
import garden from "../assets/a-garden-logo.png";

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
          <nav className="grid menu grid-col gap-2">
            <h6 className="footer-title">Terms & Conditions</h6>
            <a className="link link-hover">Account Terms</a>
            <a className="link link-hover">User Responsibilities</a>
            <a className="link link-hover">Intellectual Property</a>
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
        <img className="w-16" src={garden} alt="" />
      </aside>
    </footer>
  );
};

export default Footer;
