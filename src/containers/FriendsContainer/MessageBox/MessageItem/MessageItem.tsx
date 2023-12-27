import { FC } from "react"
import { MessageItemProps } from "./MessageItem.types"
import Image from "next/image"

export const MessageItem: FC<MessageItemProps> = ({
    content,
    isMe,
    userImage
}) => {
  return (
    <div
        className={`w-full flex justify-between gap-[30px] ${isMe ? "flex-row-reverse" : "flex-row"}`}
    >
        <div
            className="relative min-w-[60px] min-h-[60px] max-w-[60px] max-h-[60px] rounded-full overflow-clip"
        >
            <Image
                fill
                src={isMe ? "" : (userImage ?? "")}
                alt="userAvatar"
            />
        </div>
        <div
            className="bg-snd-gray-800 text-[20px] p-[10px] w-full"
        >
            {content}
        </div>
    </div>
  )
}

export default MessageItem