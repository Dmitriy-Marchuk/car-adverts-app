import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  model: "",
  mileage: "",
  minPrice: "",
  maxPrice: "",
};

const carFiltersSlice = createSlice({
  name: "carFilters",
  initialState,
  reducers: {
    setModel: (state, action) => {
      state.model = action.payload;
    },
    setMileage: (state, action) => {
      state.mileage = action.payload;
    },
    setMinPrice: (state, action) => {
      state.minPrice = action.payload;
    },
    setMaxPrice: (state, action) => {
      state.maxPrice = action.payload;
    },
    resetFilters: (state) => {
      state.model = "";
      state.mileage = "";
      state.minPrice = "";
      state.maxPrice = "";
    },
  },
});

export const { setModel, setMileage, setMinPrice, setMaxPrice, resetFilters } =
  carFiltersSlice.actions;

export const selectCarFilters = (state) => state.carFilters;

export default carFiltersSlice.reducer;
