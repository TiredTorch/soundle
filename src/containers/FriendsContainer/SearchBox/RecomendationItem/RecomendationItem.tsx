import { FC } from "react"
import { RecomendationItemProps } from "./RecomendationItem.types"
import Image from "next/image"
import { Typography } from "@/components"

export const RecomendationItem: FC<RecomendationItemProps> = ({
    id,
    username,
    userImage
}) => {
  return (
    <div
        className="w-[200px] h-[250px] flex flex-col justify-between rounded-2xl overflow-clip"
    >
        <Typography
            className="w-full h-[50px] bg-snd-gray-300 flex justify-center items-center text-[26px] text-ellipsis whitespace-nowrap overflow-hidden"
        >
            {username}
        </Typography>
        <div
            className="w-full h-[200px] bg-snd-gray-800 p-[15px]"
        >
            <div
                className="relative w-full h-full"
            >
                <Image
                    fill
                    src={userImage ?? ""}
                    alt={`${username}_image`}
                />
            </div>
        </div>
    </div>
  )
}

export default RecomendationItem