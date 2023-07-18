import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const animeDetailsApiHeaders = {
  "X-RapidAPI-Key": import.meta.env.VITE_APP_RAPID_API_KEY,
  "X-RapidAPI-Host": "myanimelist.p.rapidapi.com",
};

const baseUrl = "https://myanimelist.p.rapidapi.com/anime";

const createRequest = (url) => ({ url, headers: animeDetailsApiHeaders });

export const animeDetailsApi = createApi({
  reducerPath: "animeDetailsApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (builder) => ({
    getDetails: builder.query({
      query: (id) => createRequest(`/${id}`),
    }),
  }),
});

export const { useGetDetailsQuery } = animeDetailsApi;
