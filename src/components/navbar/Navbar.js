import React from "react";
import LeftNavbar from "./navbarItems/LeftNavbar";
import RightNavbar from "./navbarItems/RightNavbar";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <LeftNavbar />
      <RightNavbar />
    </div>
  );
};

export default Navbar;
