import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const animeNewsApiHeaders = {
  "X-RapidAPI-Key": import.meta.env.VITE_APP_RAPID_API_KEY,
  "X-RapidAPI-Host": "anime-news-net.p.rapidapi.com",
};

const baseUrl = "https://anime-news-net.p.rapidapi.com/api/news";

const createRequest = (url) => ({ url, headers: animeNewsApiHeaders });

export const AnimeNewsApi = createApi({
  reducerPath: "animeNewsApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (builder) => ({
    getNews: builder.query({
      query: () => createRequest(""),
    }),
  }),
});

export const { useGetNewsQuery } = AnimeNewsApi;
