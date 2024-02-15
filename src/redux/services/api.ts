import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IDish, IRestaurant, IReview, IUser } from "../../types";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/" }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<IRestaurant[], unknown>({
      query: () => ({
        url: "restaurants",
      }),
    }),
    getDishesByRestaurantId: builder.query<IDish[], string>({
      query: (restaurantId: string) => ({
        url: `dishes?restaurantId=${restaurantId}`,
      }),
    }),
    getReviewsByRestaurantId: builder.query<IReview[], string>({
      query: (restaurantId: string) => ({
        url: `reviews?restaurantId=${restaurantId}`,
      }),
    }),
    createReview: builder.query<unknown, string>({
      query: (restaurantId: string) => ({
        url: `review?restaurantId=${restaurantId}`,
        method: "post",
        params: {},
      }),
    }),
    updateReview: builder.query<string, unknown>({
      query: (reviewId: string) => ({
        url: `review?reviewId=${reviewId}`,
        method: "patch",
        params: {},
      }),
    }),
    getUsers: builder.query<IUser[], unknown>({
      query: () => ({
        url: "users",
      }),
    }),
  }),
});

export const {
  useGetRestaurantsQuery,
  useGetDishesByRestaurantIdQuery,
  useGetReviewsByRestaurantIdQuery,
  useCreateReviewQuery,
  useUpdateReviewQuery,
  useGetUsersQuery,
} = api;
