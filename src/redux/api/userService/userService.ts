import { createApi } from "@reduxjs/toolkit/query/react";
import { FriendDto, RecommendedUserDto } from "@/types";
import { axiosBaseQuery } from "../../axios/baseQuery/baseQuery";

export const userService = createApi({
    reducerPath: "userService",
    baseQuery: axiosBaseQuery({
        baseUrl: "/users"
    }),
    endpoints: (builder) => ({
        getRecommendedUsers: builder.query<RecommendedUserDto[], void>({
            query: () => ({
                url: "/recommended",
                method: "GET",
            })
        })
    })
})

export const {
    getRecommendedUsers
} = userService.endpoints

export const {
    useGetRecommendedUsersQuery
} = userService