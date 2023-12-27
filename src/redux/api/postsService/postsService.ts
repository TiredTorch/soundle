import { createApi } from "@reduxjs/toolkit/query/react";
import { PostDto } from "@/types";
import { axiosBaseQuery } from "../../axios/baseQuery/baseQuery";

export const postsService = createApi({
    reducerPath: "postsService",
    baseQuery: axiosBaseQuery({
        baseUrl: "/posts"
    }),
    endpoints: (builder) => ({
        getDashboardPosts: builder.query<PostDto[], void>({
            query: () => ({
                url: "",
                method: "GET",
            })
        })
    })
})

export const {
    getDashboardPosts
} = postsService.endpoints

export const {
    useGetDashboardPostsQuery
} = postsService