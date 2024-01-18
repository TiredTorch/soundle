'use client'
import { useCallback, useState } from "react"
import { useFormik } from "formik"
import { useGetRecommendedUsersQuery, useGetUsersFriendsQuery } from "@/redux"
import { FriendDto } from "@/types"
import FriendsBar from "./FriendsBar/FriendsBar"
import SearchBox from "./SearchBox/SearchBox"
import MessageBox from "./MessageBox/MessageBox"

export const FriendsContainer = () => {
    const [selectedFriend, setSelectedFriend] = useState<FriendDto | null>(null)

    const {
        data: friendsData
    } = useGetUsersFriendsQuery()

    const {
        data: recommendedUsersData
    } = useGetRecommendedUsersQuery()

    const formik = useFormik({
        initialValues: {
            searchRequest: ""
        },
        onSubmit: console.log
    })

    const handleDeselectFriend = useCallback(
        () => {
            setSelectedFriend(null)
        },
        [setSelectedFriend]
    )

    const handleSelectFriend = useCallback(
        (friend: FriendDto) => () => {
            if (
                selectedFriend?.id === friend.id
            ) {
                handleDeselectFriend()
                return
            }
            setSelectedFriend(friend)
        },
        [selectedFriend, handleDeselectFriend]
    )
    

    return (
        <div
            className="flex justify-between max-w-max-view max-h-max-view"
        >
            <FriendsBar
                handleSelectFriend={handleSelectFriend}
                formik={formik}
                friendsData={friendsData}
            />
            {selectedFriend && (
                <MessageBox
                    {...selectedFriend}
                />
            )}
            {!selectedFriend && (
                <SearchBox
                    recommendedUsersData={recommendedUsersData}
                />
            )}
        </div>
    )
}

export default FriendsContainer