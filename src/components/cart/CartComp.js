import React from "react";

const CartComp = ({ cart }) => {
  return (
    <div className="my-10 p-2">
      <img className="w-[150px] h-[150px]" src={cart?.image} alt="" />
      <div></div>
    </div>
  );
};

export default CartComp;
