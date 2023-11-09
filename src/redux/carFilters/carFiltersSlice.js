import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: {
    model: "",
    mileage: "",
    minPrice: "",
    maxPrice: "",
  },
};

const carFiltersSlice = createSlice({
  name: "carFilters",
  initialState,
  reducers: {
    setModel: (state, action) => {
      state.filters.model = action.payload;
    },
    setMileage: (state, action) => {
      state.filters.mileage = action.payload;
    },
    setMinPrice: (state, action) => {
      state.filters.minPrice = action.payload;
    },
    setMaxPrice: (state, action) => {
      state.filters.maxPrice = action.payload;
    },
    resetFilters: (state) => {
      state.filters.model = "";
      state.filters.mileage = "";
      state.filters.minPrice = "";
      state.filters.maxPrice = "";
    },
  },
});

export const { setModel, setMileage, setMinPrice, setMaxPrice, resetFilters } =
  carFiltersSlice.actions;

export const selectCarFilters = (state) => state.carFilters;

export default carFiltersSlice.reducer;
