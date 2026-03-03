import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCreateAlbumFormOpen: false,
  isShareAlbumFormOpen: false,
  sharedUsers: [],
  albumName: "",
  albumId: "",
  deleteDialough: {
    isOpen: false,
    data: {},
  },
};

export const albumSlice = createSlice({
  name: "album",
  initialState,
  reducers: {
    setCreateAlbumOpen: (state) => {
      state.isCreateAlbumFormOpen = !state.isCreateAlbumFormOpen;
    },
    setShareAlbumOpen: (state, action) => {
      state.isShareAlbumFormOpen = action.payload.isOpen;
      state.sharedUsers = action.payload.sharedUsers || [];
      state.albumName = action.payload.albumName;
      state.albumId = action.payload.albumId;
    },
    setDeleteDialoughOpen: (state, action) => {
      state.deleteDialough.isOpen = action.payload.isOpen;
      if (action.payload.data) {
        state.deleteDialough.data = action.payload.data;
      }
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  setCreateAlbumOpen,
  setShareAlbumOpen,
  setDeleteDialoughOpen,
} = albumSlice.actions;

export default albumSlice.reducer;
