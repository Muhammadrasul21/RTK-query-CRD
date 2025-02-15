import { mainApi } from './index'

const extendedApi = mainApi.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query({
      query: () => '/products',
    }),
  }),
  overrideExisting: false,
})

export const { useGetProductsQuery } = extendedApi; 
