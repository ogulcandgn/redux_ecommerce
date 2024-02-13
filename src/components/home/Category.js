import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/CategorySlices";

const Category = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div className="w-1/6  mr-5 p-1">
      <div className="p-2">
        <h2 className="font-bold text-xl border-b p-2">KATEGORİLER</h2>
        {categories?.map((category, index) => (
          <div
            className="text-lg cursor-pointer hover:bg-gray-200 p-2"
            key={index}
          >
            {category}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
