import { configureStore } from "@reduxjs/toolkit";
import carFiltersSlice from "redux/carFilters/carFiltersSlice";
import carFavoritesSlice from "./carFavorites/carFavoritesSlice";
import carCollectionSlice from "./carCollection/carCollectionSlice";

const store = configureStore({
  reducer: {
    carFilters: carFiltersSlice,
    carFavorites: carFavoritesSlice,
    carCollection: carCollectionSlice,
  },
});

export default store;
