import { createApi } from "@reduxjs/toolkit/query/react";
import { FriendDto, Message } from "@/types";
import { axiosBaseQuery } from "../../axios/baseQuery/baseQuery";

export const friendsService = createApi({
    reducerPath: "friendsService",
    baseQuery: axiosBaseQuery({
        baseUrl: "/friends"
    }),
    endpoints: (builder) => ({
        getUsersFriends: builder.query<FriendDto[], void>({
            query: () => ({
                url: "",
                method: "GET",
            })
        }),
        getFriendsChat: builder.query<Message[], string>({
            query: (userId) => ({
                url: "/chat",
                method: "GET",
                params: {
                    userId
                }
            })
        })
    })
})

export const {
    getUsersFriends,
    getFriendsChat
} = friendsService.endpoints

export const {
    useGetUsersFriendsQuery,
    useGetFriendsChatQuery
} = friendsService