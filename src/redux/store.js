import { configureStore } from "@reduxjs/toolkit";
import CategorySlices from "./CategorySlices";
import ProductSlices from "./ProductSlices";

export const store = configureStore({
  reducer: {
    categories: CategorySlices,
    products: ProductSlices,
  },
});
