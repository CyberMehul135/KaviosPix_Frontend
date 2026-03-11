import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCreateImageFormOpen: false,
  albumId: "",
  isImageLayoutGrid: false,
  selectedTags: [],
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
    setSelectedTags: (state, action) => {
      state.selectedTags = action.payload;
    },
  },
});

export const { setCreateImageFormOpen, setImageLayout, setSelectedTags } =
  imageSlice.actions;

export default imageSlice.reducer;
