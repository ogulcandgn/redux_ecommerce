import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
};

const getCategories = createAsyncThunk("category", async () => {
  const responce = await fetch("https://fakestoreapi.com/products");
});

const CategorySlice = createSlice({
  name: "categories",
  initialState,
  reducers,
  //api'den veri çekeceğimiz için extraReducers yapısını kullanıyoruz
  extraReducers: (builder) => {},
});
