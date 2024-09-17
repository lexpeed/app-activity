import { configureStore } from "@reduxjs/toolkit/react";
import baseApi from "@/api/base-api";
import mockApi from "@/api/mock-api";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    [mockApi.reducerPath]: mockApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(baseApi.middleware)
      .concat(mockApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
