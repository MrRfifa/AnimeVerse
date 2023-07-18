import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const topAnimeApiHeaders = {
  "X-RapidAPI-Key": import.meta.env.VITE_APP_RAPID_API_KEY,
  "X-RapidAPI-Host": "myanimelist.p.rapidapi.com",
};

const baseUrl = "https://myanimelist.p.rapidapi.com/anime/top/all";

const createRequest = (url) => ({ url, headers: topAnimeApiHeaders });

export const topAnimeApi = createApi({
  reducerPath: "topAnimeApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (builder) => ({
    getTop: builder.query({
      query: () => createRequest(""),
    }),
  }),
});

export const { useGetTopQuery } = topAnimeApi;
