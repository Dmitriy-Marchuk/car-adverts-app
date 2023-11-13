import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: {
    model: "",
    pricePerHour: "",
    minMileage: "",
    maxMileage: "",
  },
};

const carFiltersSlice = createSlice({
  name: "carFilters",
  initialState,
  reducers: {
    setModel: (state, action) => {
      state.filters.model = action.payload;
    },
    setPricePerHour: (state, action) => {
      state.filters.pricePerHour = action.payload;
    },
    setMinMileage: (state, action) => {
      state.filters.minMileage = action.payload;
    },
    setMaxMileage: (state, action) => {
      state.filters.maxMileage = action.payload;
    },
  },
});

export const { setModel, setPricePerHour, setMinMileage, setMaxMileage } =
  carFiltersSlice.actions;

export default carFiltersSlice.reducer;
