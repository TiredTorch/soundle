'use client'

import SongItem from "./SongItem/SongItem"

export const LibraryContainer = () => {
  return (
    <div>
        <div>
            <div></div>
            <div></div>
        </div>
        <div>
            {
                [1].map((item, index) => (
                    <SongItem
                        key={index}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default LibraryContainer