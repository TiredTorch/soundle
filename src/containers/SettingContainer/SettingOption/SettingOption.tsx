import { FC } from "react"
import { SettingOptionProps } from "./SettingOption.types"
import { Typography } from "@/components"

export const SettingOption: FC<SettingOptionProps> = ({
    handleCheck,
    isChecked,
    title
}) => {
    

    return (
        <div
          className="flex justify-start items-center gap-[10px]"
        >
            <input 
                type="checkbox" 
                checked={isChecked}
                onChange={handleCheck}
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded"
            />
            <Typography className="text-[20px]">
                {title}
            </Typography>
        </div>
  )
}

export default SettingOption