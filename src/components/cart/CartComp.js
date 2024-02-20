import React from "react";

const CartComp = ({ cart }) => {
  return (
    <div className="my-10 p-2 flex items-center justify-between">
      <img
        className="w-[150px] h-[150px] border p-3 shadow-md"
        src={cart?.image}
        alt=""
      />
      <div>
        <div>
          {cart?.title}
          {cart?.description}
        </div>
      </div>
      <div>
        {cart?.price} TL ({cart?.quantity})
      </div>
      <div className="bg-red-500 text-white cursor:pointer p-3 text-xl rounded-md flex items-center justify-center ">
        Delete Product
      </div>
    </div>
  );
};

export default CartComp;
