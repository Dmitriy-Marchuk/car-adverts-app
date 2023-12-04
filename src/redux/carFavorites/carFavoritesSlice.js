import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: {
    isFavorite: "false",
  },
};

const carFavoritesSlice = createSlice({
  name: "carFavorites",
  initialState,
  reducers: {
    setFavorite: (state, action) => {
      state.favorites.model = action.payload;
    },
    removeFavorite: (state, action) => {
      state.favorites.model = action.payload;
    },
  },
});

export const { setFavorite, removeFavorite } = carFavoritesSlice.actions;

export default carFavoritesSlice.reducer;
