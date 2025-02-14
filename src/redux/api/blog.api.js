import { mainApi } from './index';

const extendedApi = mainApi.injectEndpoints({
  endpoints: (build) => ({
    getBooks: build.query({
      query: (params) => ({
        url: '/blogs',
        method: 'GET',
        params,
      }),
      providesTags: ["BOOK"],
    }),
    createBook: build.mutation({
      query: (body) => ({
        url: '/blogs',
        method: 'POST',
        body,
      }),
      invalidatesTags: ["BOOK"], 
    }),
    deleteBook: build.mutation({
      query: (id) => ({
        url: `/blogs/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["BOOK"],
    }),
    updateBook: build.mutation({
      query: ({ id, body }) => ({ 
        url: `/blogs/${id}`,
        method: "PUT",
        body,  
      }),
      invalidatesTags: ["BOOK"],
    }),
  }),
  overrideExisting: false,
});

export const { 
  useGetBooksQuery, 
  useCreateBookMutation, 
  useDeleteBookMutation,
  useUpdateBookMutation 
} = extendedApi;
