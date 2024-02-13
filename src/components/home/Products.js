import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../redux/ProductSlices";
import Loading from "../Loading";
import Product from "./product";

const Products = () => {
  const dispatch = useDispatch();
  const { products, productsStatus } = useSelector((state) => state.products); //state.products'daki products store.js'deki belirlediğimiz products'dan geliyor

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="p-2">
      {productsStatus == "LOADING" ? (
        <Loading />
      ) : (
        <div>
          <h2 className="font-bold text-xl border-b p-2">ÜRÜNLER</h2>
          {products?.map((product, i) => (
            <Product key={i} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
