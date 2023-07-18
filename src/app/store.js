import { configureStore } from "@reduxjs/toolkit";
import { LatestAnimeApi } from "../services/LatestAnimesApi";
import { topAnimeApi } from "../services/TopANimesApi";
import { animeDetailsApi } from "../services/AnimeDetailsApi";
import { waifuVoiceApi } from "../services/WaifuVoiceApi";
import { AnimeNewsApi } from "../services/AnimeNewsApi";

const store = configureStore({
  reducer: {
    [LatestAnimeApi.reducerPath]: LatestAnimeApi.reducer,
    [topAnimeApi.reducerPath]: topAnimeApi.reducer,
    [animeDetailsApi.reducerPath]: animeDetailsApi.reducer,
    [waifuVoiceApi.reducerPath]: waifuVoiceApi.reducer,
    [AnimeNewsApi.reducerPath]: AnimeNewsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(LatestAnimeApi.middleware)
      .concat(topAnimeApi.middleware)
      .concat(animeDetailsApi.middleware)
      .concat(waifuVoiceApi.middleware)
      .concat(AnimeNewsApi.middleware),
});

export default store;
