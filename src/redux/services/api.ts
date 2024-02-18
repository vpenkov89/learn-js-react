import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IDish, IRestaurant, IReview, IUser } from "../../types";

export interface CreateReviewRequest {
  restaurantId: string;
  newReview: IReview;
}

export interface UpdateReviewRequest {
  updatedReview: IReview;
}

type TagType = "Review" | "Restaurant";
const tagTypes: TagType[] = ["Review", "Restaurant"];

export const api = createApi({
  reducerPath: "api",
  tagTypes,
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/" }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<IRestaurant[], unknown>({
      query: () => ({
        url: "restaurants",
      }),
    }),
    getUsers: builder.query<IUser[], unknown>({
      query: () => ({
        url: "users",
      }),
    }),
    getDishesByRestaurantId: builder.query<IDish[], string>({
      query: (restaurantId: string) => ({
        url: `dishes?restaurantId=${restaurantId}`,
      }),
    }),
    getReviewsByRestaurantId: builder.query<IReview[], string>({
      query: (restaurantId: string) => ({
        url: "reviews",
        params: { restaurantId },
      }),
      providesTags: (result, _, restaurantId) =>
        result
          ?.map(({ id }) => ({ type: "Review" as TagType, id }))
          .concat(
            { type: "Review", id: "ALL" },
            { type: "Restaurant", id: restaurantId }
          ) ?? [],
    }),
    createReview: builder.mutation<unknown, CreateReviewRequest>({
      query: ({ restaurantId, newReview }) => ({
        url: `review/${restaurantId}`,
        method: "POST",
        body: newReview,
      }),
      invalidatesTags: (result, _, { restaurantId }) => [
        { type: "Restaurant", id: restaurantId },
      ],
    }),
    updateReview: builder.mutation<unknown, UpdateReviewRequest>({
      query: ({ updatedReview }) => ({
        url: `review/${updatedReview.id}`,
        method: "PATCH",
        body: updatedReview,
      }),
      invalidatesTags: (result, _, { updatedReview }) => [
        { type: "Review", id: updatedReview.id },
      ],
    }),
  }),
});

export const {
  useGetRestaurantsQuery,
  useGetDishesByRestaurantIdQuery,
  useGetReviewsByRestaurantIdQuery,
  useCreateReviewMutation,
  useUpdateReviewMutation,
  useGetUsersQuery,
} = api;
