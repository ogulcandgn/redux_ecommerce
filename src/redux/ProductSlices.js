import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";

const initialState = {
  products: [],
  productsStatus: STATUS.IDLE,
  productDetail: [],
  productDetailStatus: STATUS.IDLE,
};

export const getProducts = createAsyncThunk("product", async () => {
  const responce = await fetch("https://fakestoreapi.com/products");
  const data = responce.json();
  return data;
});

export const getDetailProducts = createAsyncThunk("product", async (id) => {
  const responce = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = responce.json();
  return data;
});

const productSlice = createSlice({
  name: "product",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
      //* Bekleme durumu
      .addCase(getProducts.pending, (state, action) => {
        state.productsStatus = STATUS.LOADING;
      })
      //* başarıyla tamamlanma durumu
      .addCase(getProducts.fulfilled, (state, action) => {
        state.productsStatus = STATUS.SUCCESS;
        state.products = action.payload;
      })
      //* fail olma durumu
      .addCase(getProducts.rejected, (state, action) => {
        state.productsStatus = STATUS.FAIL;
      });
  },
});

export default productSlice.reducer;
