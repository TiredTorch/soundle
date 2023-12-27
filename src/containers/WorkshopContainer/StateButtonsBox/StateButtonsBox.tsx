import { FC, useCallback } from "react"
import { useGetTranslation } from "@/hooks"
import { WorkshopState } from "@/types"
import buttonBg1 from "@/assets/images/workshop-button-1.png"
import buttonBg2 from "@/assets/images/workshop-button-2.png"
import createSign from "@/assets/icons/create-workshop.png"
import addSign from "@/assets/icons/add-workshop.png"
import WorkshopButton from "./WorkshopButton/WorkshopButton"
import { StateButtonsBoxProps } from "./StateButtonsBox.types"

export const StateButtonsBox: FC<StateButtonsBoxProps> = ({
    setCurrentWorkshopState
}) => {
    const {
        translations: {
            TXT_WORKSHOP_PAGE
        }
    } = useGetTranslation()

    const buttons = [
        {
            title: TXT_WORKSHOP_PAGE.CREATE_SONG_TITLE,
            icon: createSign,
            background: buttonBg1,
            stateSelect: WorkshopState.CREATE
        },
        {
            title: TXT_WORKSHOP_PAGE.UPLOAD_SONG_TITLE,
            icon: addSign,
            background: buttonBg2,
            stateSelect: WorkshopState.UPLOAD
        }
    ]
      
    const handleSetWorkshopState = useCallback(
        (state: WorkshopState) => () => {
            setCurrentWorkshopState(state)
        },
        [setCurrentWorkshopState],
    )

    return (
        <div
            className="flex justify-evenly min-h-max-view min-w-max-view p-[200px] gap-[200px]"
        >
            {buttons.map((item, index) => (
                <WorkshopButton
                    key={index} 
                    handleSetState={handleSetWorkshopState(item.stateSelect)}
                    {...item}              
                />
            ))}
        </div>
    )
}

export default StateButtonsBox