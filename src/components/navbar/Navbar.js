import React from "react";
import LeftNavbar from "./navbarItems/LeftNavbar";
import RightNavbar from "./navbarItems/RightNavbar";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center my-5">
      <LeftNavbar />
      <RightNavbar />
    </div>
  );
};

export default Navbar;
