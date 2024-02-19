import React, { useEffect } from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { BsBasket } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../../../redux/CartSlice";

const RightNavbar = () => {
  const dispatch = useDispatch();
  const { carts } = useSelector((state) => state.carts);

  console.log(carts, "cart");

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);

  return (
    <div className="flex items-center gap-8">
      <div className="flex items-center border px-12 py-3 rounded-full bg-gray-200">
        <input
          className="bg-gray-200 outline-none"
          type="text"
          placeholder="Arama yapınız..."
        />
        <IoSearch size={28} />
      </div>
      <FaRegHeart size={26} />

      <div className="relative">
        <div className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
          {carts?.length}
        </div>
        <BsBasket size={26} />
      </div>
    </div>
  );
};

export default RightNavbar;
