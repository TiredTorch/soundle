import { FC } from "react"
import { SearchForm } from "@/components"
import { FriendsBarProps } from "./FriendsBar.types"
import FriendItem from "./FriendItem/FriendItem"

export const FriendsBar: FC<FriendsBarProps> = ({
  formik,
  friendsData,
  handleSelectFriend
}) => {
  return (
    <div
      className="min-w-[275px] w-[275px] min-h-max-view bg-snd-gray-300 max-h-max-view overflow-auto pb-[200px]"
    >
      <SearchForm
        formik={formik}
      />
      <div
        className="flex gap-[25px] flex-col mt-[40px]"
      >
        {friendsData?.map((item, index) => (
          <FriendItem
            onClick={handleSelectFriend(item)}
            key={index}
            {...item}
          />
        ))}
      </div>
    </div>
  )
}

export default FriendsBar