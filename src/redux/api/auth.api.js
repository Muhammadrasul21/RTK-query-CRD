import { dummyApi } from "./index";

const extendedApi = dummyApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        body,
      }),
    }),
    profile: build.query({
      query: () => ({
        url: "/auth/me",
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useLoginMutation, useProfileQuery } = extendedApi;
