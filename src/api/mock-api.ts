import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const mockApi = createApi({
  reducerPath: "mockApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
  }),
  tagTypes: [],
  endpoints: (builder) => ({
    getActivityByIdMock: builder.query<{ htmlContent: string }, string>({
      query: (id) => "activity-details",
      providesTags: [],
    }),
  }),
});

export const { useLazyGetActivityByIdMockQuery } = mockApi;

export default mockApi;
