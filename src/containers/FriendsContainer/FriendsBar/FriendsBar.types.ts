import { FriendDto } from "@/types";
import { FormikProps } from "formik"

export type FriendsBarProps = {
    formik: FormikProps<{
        searchRequest: string
    }>;
    friendsData?: FriendDto[];
    handleSelectFriend: (friend: FriendDto) => () => void
}