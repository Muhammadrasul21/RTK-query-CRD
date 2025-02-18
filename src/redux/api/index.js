import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const mainApi = createApi({
  reducerPath: "mainApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://67ac70965853dfff53dab4fc.mockapi.io",
  }),
  endpoints: () => ({}),
  tagTypes: ["BOOK", "PRODUCT"],
});

export const carApi = createApi({
  reducerPath: "carApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://67b0e8663fc4eef538e8ba2f.mockapi.io/",
  }),
  endpoints: () => ({}),
  tagTypes: ["CAR", "PRODUCT"],
});
export const dummyApi = createApi({
  reducerPath: "dummyApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_ADMIN_URL  }),
  endpoints: () => ({}),
  tagTypes: ["DUMMY", "PRODUCT"],
});
