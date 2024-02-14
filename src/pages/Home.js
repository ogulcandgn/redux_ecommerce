import React, { useState } from "react";
import Category from "../components/home/Category";
import Products from "../components/home/Products";
import SliderComp from "../components/home/SliderComp";
import Sorting from "../components/home/Sorting";

const Home = () => {
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");

  return (
    <div>
      <SliderComp />
      <Sorting />
      <div className="flex">
        <Category setCategory={setCategory} />
        <Products category={category} />
      </div>
    </div>
  );
};

export default Home;
