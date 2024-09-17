import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ActivityDetails } from "./activity/types";

const mockApi = createApi({
  reducerPath: "mockApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
  }),
  tagTypes: [],
  endpoints: (builder) => ({
    getActivityByIdMock: builder.query<ActivityDetails, string>({
      query: (id) => "activity-details",
      providesTags: [],
    }),
  }),
});

export const { useLazyGetActivityByIdMockQuery } = mockApi;

export default mockApi;
