'use client'

import { FC } from "react"
import { PostItemProps } from "./PostItem.types"
import Image from "next/image"
import { Typography } from "@/components"

export const PostItem: FC<PostItemProps> = ({
    author,
    authorImage,
    content,
    isLiked,
    isReposted,
    likesAmount,
    onLikeClick,
    onRepostClick
}) => {
  return (
    <div
        className="bg-snd-gray-500 w-full rounded-2xl overflow-hidden"
    >
        <div
            className="bg-snd-gray-800 flex justify-between"
        >
            <Typography
                className="text-[38px] font-playfair py-[20px] pl-[50px]"
            >
                {author}
            </Typography>
            <div
                className="flex justify-between gap-[200px]"
            >
                <div
                    className="flex gap-[50px] items-center"
                >
                    <button
                        className="rounded-full bg-snd-gray-150 w-[70px] h-[70px]"
                    >

                    </button>
                    <button
                        className="rounded-full bg-snd-gray-150 w-[70px] h-[70px]"
                    >

                    </button>
                </div>
                <div
                    className="relative w-[100px] rounded-l-full overflow-hidden"
                >
                    <Image
                        fill
                        src={authorImage}
                        alt="user-avatar"
                    />
                </div>
            </div>
        </div>
        <div
            className="p-[20px] text-[26px] italic"
        >
            {content}
        </div>
    </div>
  )
}

export default PostItem