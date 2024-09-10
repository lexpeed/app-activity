import baseApi, { tags } from "../baseApi";
import { SearchActivity } from "./types";

const baseUrl = "activities";

export const activityApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    searchActivities: builder.query<SearchActivity[], void>({
      query: () => baseUrl,
      providesTags: [tags.activity],
    }),
    getActivityById: builder.query<SearchActivity, string>({
      query: (id) => "activity-details",
      providesTags: [tags.activity],
    }),
  }),
  overrideExisting: false,
});

export const { useSearchActivitiesQuery, useLazyGetActivityByIdQuery } =
  activityApi;
