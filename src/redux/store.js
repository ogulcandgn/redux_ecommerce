import { configureStore } from "@reduxjs/toolkit";
import CategorySlices from "./CategorySlices";

export const store = configureStore({
  reducer: {
    categories: CategorySlices,
  },
});
