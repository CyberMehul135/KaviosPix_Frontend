import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCreateImageFormOpen: false,
  albumId: "",
  isImageLayoutGrid: false,
};

export const imageSlice = createSlice({
  name: "image",
  initialState,
  reducers: {
    setCreateImageFormOpen: (state, action) => {
      state.isCreateImageFormOpen = !state.isCreateImageFormOpen;
      state.albumId = action.payload;
    },
    setImageLayout: (state, action) => {
      state.isImageLayoutGrid = action.payload.isGrid;
    },
  },
});

export const { setCreateImageFormOpen, setImageLayout } = imageSlice.actions;

export default imageSlice.reducer;
