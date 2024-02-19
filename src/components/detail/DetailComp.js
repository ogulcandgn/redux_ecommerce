import React from "react";

const DetailComp = ({ productDetail }) => {
  return (
    <div className="flex gap-10 my-20">
      <img src={productDetail?.image} className="w-[500px] h-[500px]" />
      <div>
        <div className="text-4xl font-bold">{productDetail?.title}</div>
        <div className="my-4">{productDetail?.description}</div>
      </div>
    </div>
  );
};

export default DetailComp;
