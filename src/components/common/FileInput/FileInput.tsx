'use client'

import { FC, PropsWithChildren } from "react"
import { FileInputProps } from "./FileInput.types"

export const FileInput: FC<PropsWithChildren<FileInputProps>> = ({
    children,
    ...rest
}) => {
  return (
    <label 
            className="flex flex-col items-center justify-center w-full h-full cursor-pointer bg-snd-gray-300 hover:bg-snd-gray-500 transition-colors"
        >
            <div 
                className="flex flex-col items-center justify-center"
            >
                {children}
            </div>
            <input 
                {...rest}
                type="file" 
                className="hidden"
            />
    </label>
  )
}

export default FileInput