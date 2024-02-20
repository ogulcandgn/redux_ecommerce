import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/CartSlice";

const DetailComp = ({ productDetail }) => {
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const increment = () => {
    //* max stok miktarı kadar arttırılabilir
    if (quantity < productDetail?.rating?.count) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const addBasket = () => {
    dispatch(
      addToCart({
        id: productDetail?.id,
        title: productDetail?.title,
        image: productDetail?.image,
        price: productDetail?.price,
        quantity: quantity,
      })
    );
  };

  return (
    <div className="flex gap-10 my-20">
      <img
        src={productDetail?.image}
        className="w-[500px] h-[500px] shadow-lg p-10"
      />
      <div>
        <div className="text-4xl font-bold">{productDetail?.title}</div>
        <div className="my-4">{productDetail?.description}</div>
        <div className="text-orange-600">
          Rating : {productDetail?.rating?.rate}
        </div>
        <div className="text-orange-600">
          Stock quantity: {productDetail?.rating?.count}
        </div>
        <div className="text-5xl font-bold mt-5">
          {productDetail?.price + productDetail?.price * quantity}
          <span className="text-sm ml-2">TL</span>
        </div>
        <div className="flex items-center gap-5 my-4">
          <div onClick={decrement} className="text-3xl cursor-pointer">
            -
          </div>
          <input
            className="w-10 text-center text-4xl"
            type="text"
            value={quantity}
          />
          <div onClick={increment} className="text-3xl cursor-pointer">
            +
          </div>
        </div>
        <div>
          <div
            onClick={addBasket}
            className="my-4 border w-[200px] text-2xl text-white rounded-md bg-blue-500 hover:bg-blue-600 cursor-pointer h-16 flex items-center justify-center"
          >
            Sepete Ekle
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailComp;
