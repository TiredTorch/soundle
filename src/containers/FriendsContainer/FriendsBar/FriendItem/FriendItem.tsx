import { FC } from "react"
import Image from "next/image"
import { Typography } from "@/components"
import { FriendItemProps } from "./FriendItem.types"

export const FriendItem: FC<FriendItemProps> = ({
    username,
    userImage,
    status,
    onClick
}) => {
  return (
    <div
        onClick={onClick}
        className="w-full h-[100px] flex justify-between bg-snd-gray-800 border-t-[3px] border-t-snd-gray-200 border-b-[3px] border-b-snd-gray-200  border-r-[1px] border-r-snd-gray-200 cursor-pointer"
    >
        <div
            className="relative h-full w-1/3"
        >
            <Image
                fill
                src={userImage ?? ""}
                alt={`image_${username}`}
            />
        </div>
        <div
            className="h-full w-2/3 flex flex-col justify-between pl-[5px]"
        >
            <Typography
                className="text-[26px] text-ellipsis w-full whitespace-nowrap overflow-hidden"
            >
                {username}
            </Typography>
            <Typography>
                {status}
            </Typography>
        </div>
    </div>
  )
}

export default FriendItem