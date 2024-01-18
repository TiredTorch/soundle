'use client'
import { useMemo, useState } from "react"
import { WorkshopState } from "@/types"
import StateButtonsBox from "./StateButtonsBox/StateButtonsBox"
import CreateSongBox from "./CreateSongBox/CreateSongBox"
import UploadSongBox from "./UploadSongBox/UploadSongBox"

export const WorkshopContainer = () => {
    const [currentWorkshopState, setCurrentWorkshopState] = useState<WorkshopState>(WorkshopState.NOT_SELECTED)
    
    const workshopBoxes = useMemo(() => [
        {
            component: (
                <StateButtonsBox 
                    setCurrentWorkshopState={setCurrentWorkshopState}
                />
            ),
            state: WorkshopState.NOT_SELECTED
        },
        {
            component: (
                <CreateSongBox/>
            ),
            state: WorkshopState.CREATE
        },
        {
            component: (
                <UploadSongBox/>
            ),
            state: WorkshopState.UPLOAD
        }
    ], [setCurrentWorkshopState])

    return (
        <>
            {workshopBoxes.map(item => item.state === currentWorkshopState && item.component)}
        </>
    )
}

export default WorkshopContainer