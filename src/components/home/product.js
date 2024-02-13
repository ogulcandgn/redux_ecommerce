import React from "react";

const Product = ({ product }) => {
  return (
    <div className="h-96 w-96 ">
      <img src={product?.image} className="w-[200px] h-[200px]" />
    </div>
  );
};

export default Product;
