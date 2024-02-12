import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const loadingSpinner = createSlice({
  name: "loading",
  initialState,
  reducers,
});

export default loadingSpinner.reducer;
