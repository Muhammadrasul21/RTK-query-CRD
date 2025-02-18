import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const mainApi = createApi({
  reducerPath: "mainApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_MAIN_URL }),
  endpoints: () => ({}),
  tagTypes: ["BOOK", "PRODUCT"],
});

export const carApi = createApi({
  reducerPath: "carApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_ADMIN_URL }),
  endpoints: () => ({}),
  tagTypes: ["CAR", "PRODUCT"],
});
export const dummyApi = createApi({
  reducerPath: "dummyApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  endpoints: () => ({}),
  tagTypes: ["DUMMY", "PRODUCT"],
});
