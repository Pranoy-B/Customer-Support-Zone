import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="max-w-dvw md:pr-30 md:pl-30 flex justify-between mx-auto navbar bg-base-100 shadow-sm mb-5">
        <h1 className="font-bold">CS-Ticketing System</h1>
        <div className="hidden lg:flex items-center space-x-4">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Faq</a>
            </li>
            <li>
              <a>Changelog</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Download</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
            <li></li>
          </ul>
          <button className="bg-[#422ad5] text-white pl-5 pr-5 pb-2 pt-2 font-bold rounded-xl">
            <span className="font-bold text-white">+</span> New Ticked
          </button>
        </div>
        <div className="lg:hidden dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Faq</a>
          </li>
          <li>
            <a>Changelog</a>
          </li>
          <li>
            <a>Blog</a>
          </li>
          <li>
            <a>Download</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
          <li>
            <button className="bg-[#422ad5] text-white pl-7 pr-1 font-semibold text-xl rounded-xl mt-2 w-full">
              <span className="font-bold text-xl items-center text-white">+</span> New Ticket
            </button>
          </li>
        </ul>
      </div>
      </div>

      
    </div>
  );
};

export default Navbar;
