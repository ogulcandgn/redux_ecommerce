import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/CategorySlices";

const Category = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);

  console.log(categories, "categoriler");

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return <div className="w-1/6 bg-gray-100 mr-5 p-1">Category</div>;
};

export default Category;
