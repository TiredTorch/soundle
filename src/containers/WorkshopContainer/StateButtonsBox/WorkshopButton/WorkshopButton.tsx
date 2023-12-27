import { FC } from "react"
import Image from "next/image"
import { WorkshopButtonProps } from "./WorkshopButton.types"
import { Typography } from "@/components"

export const WorkshopButton: FC<WorkshopButtonProps> = ({
    background,
    handleSetState,
    icon,
    title
}) => {
    return (
        <div
            onClick={handleSetState}
            className="cursor-pointer w-1/2 min-h-full shadow-xl hover:shadow-2xl transition-shadow"
        >
            <div
                className="relative w-full h-full z-[-2]"
            >
                <Image
                    fill
                    src={background}
                    alt="workshop_button_bg"
                />
            </div>
            <div
                className="relative w-full h-full z-[-1] translate-y-[-100%] flex flex-col justify-evenly items-center bg-snd-gray-300 bg-opacity-85"
            >
                <Typography
                    className="text-[50px] font-bold"
                >
                    {title}
                </Typography>
                <div
                    className="relative w-1/5 aspect-square"
                >
                    <Image
                        fill
                        src={icon}
                        alt="workshop_button_icon"
                    />
                </div>
            </div>
        </div>
    )
}

export default WorkshopButton