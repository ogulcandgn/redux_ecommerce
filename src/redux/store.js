import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import CategorySlices from "./CategorySlices";
import ProductSlices from "./ProductSlices";

export const store = configureStore({
  reducer: {
    categories: CategorySlices,
    products: ProductSlices,
    carts: CartSlice,
  },
});
