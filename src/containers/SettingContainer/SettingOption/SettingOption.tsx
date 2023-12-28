import { FC, useCallback } from "react"
import { SettingOptionProps } from "./SettingOption.types"
import { useTypedDispatch } from "@/redux"
import { ActionCreatorWithoutPayload } from "@reduxjs/toolkit"

export const SettingOption: FC<SettingOptionProps> = ({
    handleCheck,
    isChecked,
    title
}) => {
    const dispatch = useTypedDispatch()

    const handleCheckInput = useCallback(
      () => {
        dispatch((handleCheck as ActionCreatorWithoutPayload<any>)())
      },
      [dispatch, handleCheck],
    )
    

    return (
        <div>
            <input 
                type="checkbox" 
                checked={isChecked}
                onChange={handleCheckInput}
            />
            <div>
                {title}
            </div>
        </div>
  )
}

export default SettingOption