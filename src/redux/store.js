import { configureStore } from "@reduxjs/toolkit";
import carFiltersSlice from "redux/carFilters/carFiltersSlice";

const store = configureStore({
  reducer: {
    carFilters: carFiltersSlice,
  },
});

export default store;
