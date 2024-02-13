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

export const getDetailProducts = createAsyncThunk("products", async (id) => {
  const responce = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = responce.json();
  return data;
});

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  // api'den veri çekeceğimiz için reducer'ları extraReducer olarak belirtiyoruz
  extraReducers: (builder) => {
    builder
      //*bekleme alanı
      .addCase(getProducts.pending, (state, action) => {
        state.productsStatus = STATUS.LOADING;
      })
      //* başarıyla tamamlanma durumu
      .addCase(getProducts.fulfilled, (state, action) => {
        state.productsStatus = STATUS.SUCCESS;
        state.products = action.payload;
      })
      // //* fail olma durumu
      .addCase(getProducts.rejected, (state, action) => {
        state.productsStatus = STATUS.FAIL;
      })
      //* detail products durumları
      .addCase(getDetailProducts.pending, (state, action) => {
        state.productDetailStatus = STATUS.LOADING;
      })
      .addCase(getDetailProducts.fulfilled, (state, action) => {
        state.productsStatus = STATUS.SUCCESS;
        state.products = action.payload;
      })
      .addCase(getDetailProducts.rejected, (state, action) => {
        state.productsStatus = STATUS.FAIL;
      });
  },
});

export default productSlice.reducer;
