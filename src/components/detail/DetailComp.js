import React from "react";

const DetailComp = ({ productDetail }) => {
  return (
    <div>
      <img src={productDetail?.image} />
      <div>
        <div>{productDetail?.title}</div>
      </div>
    </div>
  );
};

export default DetailComp;