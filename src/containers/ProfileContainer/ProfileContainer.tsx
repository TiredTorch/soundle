import Image from "next/image"
import { useGetTranslation } from "@/hooks"
import MusicHistoryItem from "./MusicHistoryItem/MusicHistoryItem"
import { PostItem, Typography } from "@/components"

export const ProfileContainer = () => {
  const {
    translations: {
      TXT_PROFILE_PAGE: {
        POST_INPUT_LABEL,
        POST_BUTTON
      }
    }
  } = useGetTranslation()

  return (
    <div
      className="flex justify-between max-h-max-view min-h-max-view max-w-full min-w-full gap-[40px]"
    >
      <div
        className="w-3/4 p-[50px] flex flex-col gap-[50px]"
      >
        <div
          className="flex gap-[10px]"
        >
          <div
            className="relative aspect-square cursor-pointer w-[200px]"
          >
            <Image
                priority
                sizes="200"
                fill
                src={"data:image/jpeg;base64,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"}
                alt={`profile_avatar`}
            />
          </div>
          <div>
            <Typography
              className="text-[50px]"
            >
              Abama
            </Typography>
            <Typography
              className="text-[20px]"
            >
              Abama
            </Typography>
          </div>
        </div>
        <div
          className="w-full"
        >
          <input
            placeholder={POST_INPUT_LABEL}
            className="bg-snd-gray-500 border border-snd-gray-900 p-3 pr-[80px] font-playfair italic placeholder-snd-gray-100 text-[20px] rounded-lg w-full"
          />
          <button
            className="bg-snd-gray-300 border border-snd-gray-900 p-3 font-playfair text-snd-gray-100 text-[20px] rounded-lg absolute translate-x-[-100%]"
          >
            {POST_BUTTON}
          </button>
        </div>
        <div
          className="flex flex-col gap-[50px] overflow-auto"
        >
          <PostItem 
            author={"aaaa"} 
            authorImage={""} 
            content={"ssssss"} 
            likesAmount={0} 
            onLikeClick={console.log} 
            onRepostClick={console.log} 
            isLiked={false} 
            isReposted={true}
          />
          <PostItem 
            author={"aaaa"} 
            authorImage={""} 
            content={"ssssss"} 
            likesAmount={0} 
            onLikeClick={console.log} 
            onRepostClick={console.log} 
            isLiked={false} 
            isReposted={true}
          />
          <PostItem 
            author={"aaaa"} 
            authorImage={""} 
            content={"ssssss"} 
            likesAmount={0} 
            onLikeClick={console.log} 
            onRepostClick={console.log} 
            isLiked={false} 
            isReposted={true}
          />
          <PostItem 
            author={"aaaa"} 
            authorImage={""} 
            content={"ssssss"} 
            likesAmount={0} 
            onLikeClick={console.log} 
            onRepostClick={console.log} 
            isLiked={false} 
            isReposted={true}
          />
          <PostItem 
            author={"aaaa"} 
            authorImage={""} 
            content={"ssssss"} 
            likesAmount={0} 
            onLikeClick={console.log} 
            onRepostClick={console.log} 
            isLiked={false} 
            isReposted={true}
          />
        </div>
      </div>
      <div
        className="w-1/4 bg-gradient-to-l from-snd-gray-500 to-transparent p-5 flex flex-col gap-[20px]"
      >
        <MusicHistoryItem imageUrl={""} name={"aaaaaa"} author={"bbbbbbbb"}/>
        <MusicHistoryItem imageUrl={""} name={"aaaaaa"} author={"bbbbbbbb"}/>
        <MusicHistoryItem imageUrl={""} name={"aaaaaa"} author={"bbbbbbbb"}/>
        <MusicHistoryItem imageUrl={""} name={"aaaaaa"} author={"bbbbbbbb"}/>
      </div>
    </div>
  )
}

export default ProfileContainer