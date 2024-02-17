import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DetailComp from "../components/detail/DetailComp";
import Loading from "../components/Loading";
import { getDetailProducts } from "../redux/ProductSlices";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { productDetail, productDetailStatus } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getDetailProducts(id));
  }, [dispatch, id]);

  console.log(productDetail);
  return (
    <div>
      {productDetailStatus == "LOADING" ? <Loading /> : <div>deneme</div>}
    </div>
  );
};

export default Detail;
