import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const mainApi = createApi({
  reducerPath: 'mainApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://67ac70965853dfff53dab4fc.mockapi.io' }),
  endpoints: () => ({}),
  tagTypes:["BOOK", "PRODUCT"]
})

