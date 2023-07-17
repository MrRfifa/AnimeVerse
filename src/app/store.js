import { configureStore } from "@reduxjs/toolkit";
import { LatestAnimeApi } from "../services/LatestAnimesApi";

const store = configureStore({
  reducer: {
    [LatestAnimeApi.reducerPath]: LatestAnimeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(LatestAnimeApi.middleware),
});

export default store;
