'use client'

import { useState } from "react"
import { TextAreaComponentProps } from "./TextArea.types"

export const TextArea: TextAreaComponentProps = ({
    onChange,
    value,
    label,
    error,
    placeholder
}) => {
    return (
        <div
            className="w-full flex flex-col font-playfair"
        >
            {label && (
                <label
                    className={`text-[20px] absolute text-snd-gray-150`}
                >
                    {label}
                </label>
            )}
            <input
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="text-[32px] bg-transparent border-b-[1px] border-b-snd-gray-200 outline-none shadow-none mt-6"
            />
            {error && (
                <span
                    className="text-snd-red-300 text-[20px]"
                >
                    {error}
                </span>
            )}
        </div>
    )
}

export default TextArea