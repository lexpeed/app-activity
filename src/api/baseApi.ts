import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const tags = {
  activity: "activity",
};

const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
  }),
  tagTypes: [tags.activity],
  endpoints: () => ({}),
});

export default baseApi;