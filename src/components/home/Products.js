import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../redux/ProductSlices";

const Products = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <div className="p-2">
      <h2 className="font-bold text-xl border-b p-2">ÜRÜNLER</h2>
      {products?.map((product, index) => {
        <div key={index}>{product}</div>;
      })}
    </div>
  );
};

export default Products;
