import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const waifuVoiceApiHeaders = {
  "X-RapidAPI-Key": import.meta.env.VITE_APP_RAPID_API_KEY,
  "X-RapidAPI-Host": "anime-voice-waifu-ai-api.p.rapidapi.com",
};

const baseUrl = "https://anime-voice-waifu-ai-api.p.rapidapi.com/japaneseto";

const createRequest = (url, params) => ({
  url,
  headers: waifuVoiceApiHeaders,
  params,
});

export const waifuVoiceApi = createApi({
  reducerPath: "waifuVoiceApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (builder) => ({
    getVoice: builder.query({
      query: () => createRequest(""), // Pass the params to createRequest
    }),
  }),
});

export const { useGetVoiceQuery } = waifuVoiceApi;
