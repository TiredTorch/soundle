import { FC } from "react"
import { MusicHistoryItemProps } from "./MusicHistoryItem.types"
import Image from "next/image"

export const MusicHistoryItem: FC<MusicHistoryItemProps> = ({
  author,
  imageUrl,
  name
}) => {
  return (
    <div
      className="bg-snd-gray-200 shadow-2xl min-h-[150px]"
    >
      <div
        className="relative"
      >
        <Image
            priority
            sizes="70"
            fill
            src={imageUrl}
            alt={`profile_avatar`}
        />
      </div>
      <div>
        <div>{author}</div>
        <div>{name}</div>
      </div>
    </div>
  )
}

export default MusicHistoryItem