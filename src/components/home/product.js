import React from "react";

const Product = ({ product }) => {
  return (
    <div className="w-[400px] p-2 m-2 border rounded-md relative cursor-pointer ">
      <div className="text-xl font-bold absolute rounded-md top-0 right-0 bg-black text-white m-3 p-1">
        {product?.price}₺
      </div>
      <img
        src={product?.image}
        className="w-[200px] h-[200px] object-cover m-auto"
      />
      <div className="my-3 p-2 text-center text-lg font-bold">
        {product.title}
      </div>
    </div>
  );
};

export default Product;
