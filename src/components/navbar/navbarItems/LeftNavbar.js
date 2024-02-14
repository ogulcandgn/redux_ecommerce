import React from "react";
import { Link } from "react-router-dom";

const LeftNavbar = () => {
  return (
    <div className="flex items-center">
      <div className="text-6xl mr-3">Step Zone</div>
      <div className="ml-5">
        <Link
          to="/"
          className={`mr-3 text-md font-bold ${({ isActive }) =>
            isActive ? "active" : ""}`}
        >
          Home
        </Link>
        <Link className="mr-3 font-bold text-md" to="about">
          About Us
        </Link>
        <Link className="mr-3 font-bold text-md" to="about">
          Basket
        </Link>
        <Link className="mr-3 font-bold text-md" to="about">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default LeftNavbar;
