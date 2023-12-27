import { User } from "..";

export type FriendDto = Pick<User, "username" | "userImage" | "id"> & {
    status: string;
}

export type RecommendedUserDto = Pick<User, "username" | "userImage" | "id">