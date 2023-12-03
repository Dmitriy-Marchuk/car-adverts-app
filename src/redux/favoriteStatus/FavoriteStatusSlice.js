import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorite: {
    status: false,
  },
};

const favoriteStatusSlice = createSlice({
  name: "favoriteStatus",
  initialState,
  reducers: {
    setFavoriteStatus: (state, action) => {
      state.favorites.status = action.payload;
    },
  },
});

export const { setFavoriteStatus } = favoriteStatusSlice.actions;

export default favoriteStatusSlice.reducer;
