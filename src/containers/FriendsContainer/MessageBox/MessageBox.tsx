import { FC } from "react"
import { useGetFriendsChatQuery, useTypedSelector } from "@/redux"
import { SendMessageForm } from "@/components"
import MessageItem from "./MessageItem/MessageItem"
import { MessageBoxProps } from "./MessageBox.types"

export const MessageBox: FC<MessageBoxProps> = ({
  id,
  userImage
}) => {
  const currentUserId = useTypedSelector(store => store.authSlice?.currentUser?.id)

  const {
    data
  } = useGetFriendsChatQuery(id)

  return (
    <div
      className="w-full max-h-max-view flex justify-between flex-col gap-[20px] pt-[20px] pb-[120px] px-[100px]"
    >
      <div
        className="flex flex-col gap-[20px] overflow-auto pr-[10px]"
      >
        {data?.map((item, index) => (
          <MessageItem 
            key={index}  
            content={item.content}
            isMe={item.from === currentUserId}
            userImage={userImage}
          />
        ))}
      </div>
      <SendMessageForm/>
    </div>
  )
}

export default MessageBox
