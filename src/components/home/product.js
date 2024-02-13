import React from "react";

const Product = ({ product }) => {
  return (
    <div className="w-[400px] mb-2 mx-2 p-2 m-2 border rounded-md relative cursor-pointer ">
      <div className="text-xl font-bold absolute rounded-md top-0 right-0 bg-black text-white m-3 p-1">
        {product?.price}₺
      </div>
      <img
        src={product?.image}
        className="w-[200px] h-[200px] object-cover m-auto"
      />
      <div className="text-center mt-3 px-3 text-lg font-bold">
        {product.title}
      </div>
    </div>
  );
};

export default Product;
