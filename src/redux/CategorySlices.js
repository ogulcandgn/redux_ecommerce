import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
};

export const getCategories = createAsyncThunk("category", async () => {
  const responce = await fetch("https://fakestoreapi.com/products");
  const data = responce.json();
  return data;
});

const CategorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  //api'den veri çekeceğimiz için extraReducers yapısını kullanıyoruz
  extraReducers: (builder) => {
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
  },
});

export default CategorySlice.reducer;
