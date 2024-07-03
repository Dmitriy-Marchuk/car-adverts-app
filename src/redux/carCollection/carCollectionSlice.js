import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carCollection: [],
};

const carCollectionSlice = createSlice({
  name: "carCollection",
  initialState,
  reducers: {
    setCarCollection: (state, action) => {
      state.carCollection = action.payload;
    },
  },
});

export const { setCarCollection } = carCollectionSlice.actions;

export default carCollectionSlice.reducer;
