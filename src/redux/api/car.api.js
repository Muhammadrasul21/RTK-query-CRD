import { carApi } from "./index";

const extendedApi = carApi.injectEndpoints({
  endpoints: (build) => ({
    getCars: build.query({
      query: (params) => ({
        url: "/cars",
        method: "GET",
        params,
      }),
      providesTags: ["CAR"],
    }),
    createCar: build.mutation({
      query: (body) => ({
        url: "/cars",
        method: "POST",
        body,
      }),
      invalidatesTags: ["CAR"],
    }),
    deleteCar: build.mutation({
      query: ({ id }) => ({
        url: `/cars/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["CAR"],
    }),
    updateCar: build.mutation({
      query: ({ id, body }) => ({
        url: `/cars/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["CAR"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetCarsQuery,
  useCreateCarMutation,
  useDeleteCarMutation,
  useUpdateCarMutation,
} = extendedApi;
