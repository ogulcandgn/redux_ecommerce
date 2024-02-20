import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartComp from "../components/cart/CartComp";
import { getCartTotal } from "../redux/CartSlice";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { carts, totalAmount, itemsCount } = useSelector(
    (state) => state.carts
  );
  console.log(carts, totalAmount, itemsCount, "cart");

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);
  return (
    <div>
      {carts?.length > 0 ? (
        <div>
          {carts?.map((cart, index) => {
            return <CartComp key={index} cart={cart} />;
          })}
          <CartComp />
        </div>
      ) : (
        <div>Basket is empty....</div>
      )}
      <div className="flex justify-between mb-5 text-lg ">
        <div></div>
        <div className="border rounded-md p-3 bg-blue-500 text-white">
          Total Amount : <span className="text-2xl">{totalAmount} TL </span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
