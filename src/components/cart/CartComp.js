import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeFromCart } from "../../redux/CartSlice";

const CartComp = ({ cart }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (cart === undefined || cart?.quantity <= 0) return null;

  const handleGoHome = () => {};

  return (
    <div className="my-10 p-2 flex items-center justify-between">
      <img
        onClick={() => navigate(`/products/${cart.id}`)}
        className="w-[150px] h-[150px] border p-3 shadow-md cursor-pointer"
        src={cart?.image}
        alt=""
      />
      <div className="w-[476px]">
        <div className="text-xl">{cart?.title}</div>
        <div className="text-xl">{cart?.description}</div>
      </div>
      <div className="text-xl">
        {cart?.price} TL ({cart?.quantity})
      </div>
      <div
        onClick={() => dispatch(removeFromCart(cart?.id))}
        className="bg-red-500 text-white cursor-pointer p-3 text-xl rounded-md flex items-center justify-center "
      >
        Delete Product
      </div>
    </div>
  );
};

export default CartComp;
