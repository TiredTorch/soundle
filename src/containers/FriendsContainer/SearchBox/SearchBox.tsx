import { FC } from 'react'
import { SearchBoxProps } from './SearchBox.types'
import RecomendationItem from './RecomendationItem/RecomendationItem'

const SearchBox: FC<SearchBoxProps> = ({
  recommendedUsersData
}) => {
  return (
    <div
      className='w-full max-h-max-view overflow-auto flex justify-evenly flex-wrap gap-[20px] pt-[20px] pb-[200px]'
    >
      {recommendedUsersData?.map((item, index) => (
        <RecomendationItem
          key={index}
          {...item}
        />
      ))}
    </div>
  )
}

export default SearchBox