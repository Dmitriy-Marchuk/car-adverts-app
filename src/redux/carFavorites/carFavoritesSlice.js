import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
};

const carFavoritesSlice = createSlice({
  name: "carFavorites",
  initialState,
  reducers: {
    setFavorite: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        (carId) => carId !== action.payload
      );
    },
  },
});

export const { setFavorite, removeFavorite } = carFavoritesSlice.actions;

export default carFavoritesSlice.reducer;
