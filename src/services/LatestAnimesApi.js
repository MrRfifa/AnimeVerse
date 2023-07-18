import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const latestAnimeApiHeaders = {
  "X-RapidAPI-Key": import.meta.env.VITE_APP_RAPID_API_KEY,
  "X-RapidAPI-Host": "latest-anime-api.p.rapidapi.com",
};

const baseUrl = "https://latest-anime-api.p.rapidapi.com/anime";

const createRequest = (url) => ({ url, headers: latestAnimeApiHeaders });

export const LatestAnimeApi = createApi({
  reducerPath: "latestAnimeApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (builder) => ({
    getLatest: builder.query({
      query: () => createRequest(""),
    }),
  }),
});

export const { useGetLatestQuery } = LatestAnimeApi;
