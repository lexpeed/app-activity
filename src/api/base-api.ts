import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const tags = {
  activity: "activity",
};

const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),
  tagTypes: [tags.activity],
  endpoints: () => ({}),
});

export default baseApi;
