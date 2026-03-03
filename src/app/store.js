import { configureStore } from "@reduxjs/toolkit";
import albumSlice from "../features/album/albumSlice";
import imageSlice from "../features/image/imageSlice";

export const store = configureStore({
  reducer: {
    album: albumSlice,
    image: imageSlice,
  },
});
