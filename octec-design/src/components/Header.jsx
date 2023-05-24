import React from "react";
import profile from "../assets/profile.svg";
import logo from "../assets/logo.svg";

export const Header = () => {
  return (
    <header className="bg-orange-500 py-4 px-8 flex flex-col sm:flex-row justify-between items-center">
      <div className="flex gap-4 items-center">
        <img src={logo} alt="" className="h-6 w-6" />
        <h1 className="text-white text-lg font-bold">Like Hire</h1>
      </div>
      <nav className="flex mt-4 sm:mt-0">
        <ul className="flex flex-wrap gap-6">
          <li>
            <a href="#" className="text-white hover:underline">
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:underline">
              Jobs
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:underline">
              Applicants
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:underline">
              Post a Job
            </a>
          </li>
        </ul>
      </nav>
      <div className="flex mt-4 sm:mt-0 items-center">
        <button className="bg-white py-2 px-4 rounded-[6px]">
          Go Unlimited
        </button>
        <img
          src={profile}
          alt="Profile"
          className="h-8 w-8 rounded-full ml-4"
        />
        <p className="text-sm ml-2">My Profile</p>
      </div>
    </header>
  );
};
