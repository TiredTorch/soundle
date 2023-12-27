import { FriendDto } from "@/types";

export type FriendItemProps = FriendDto & {
    onClick: VoidFunction
}