import React from "react";

const DetailComp = ({ productDetail }) => {
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
        <div className="text-5xl font-bold mt-5">
          {productDetail?.price} <span className="text-sm">TL</span>
        </div>
        <div className="flex items-center gap-5 my-4">
          <div className="text-3xl">-</div>
          <input className="w-5 text-center" type="text" value="0" />
          <div className="text-3xl">+</div>
        </div>
        <div>
          <div className="my-4 border w-[200px] text-2xl text-white rounded-md bg-blue-500 hover:bg-blue-600 cursor-pointer h-16 flex items-center justify-center">
            Sepete Ekle
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailComp;
