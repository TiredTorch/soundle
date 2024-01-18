/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo } from "react"
import { useGetTranslation } from "@/hooks"
import { 
    toggleBeAdorablePerson, 
    toggleEnableNotifications, 
    toggleEnableVisualisator, 
    toggleMuteWorkshopSound, 
    toggleShowHistory, 
    useTypedDispatch, 
    useTypedSelector 
} from "@/redux"
import SettingOption from "./SettingOption/SettingOption"

export const SettingContainer = () => {
    const dispatch = useTypedDispatch()

    const muteWorkshopSound = useTypedSelector(store => store.configSlice.muteWorkshopSound)
    const enableNotifications = useTypedSelector(store => store.configSlice.enableNotifications)
    const enableVisualisator = useTypedSelector(store => store.configSlice.enableVisualisator)
    const beAdorablePerson = useTypedSelector(store => store.configSlice.beAdorablePerson)
    const showHistory = useTypedSelector(store => store.configSlice.showHistory)

    const {
        translations: {
            TXT_SETTING_PAGE
        }
    } = useGetTranslation()

    const handle = {}

    const settingOptions = useMemo(() => [
        {
            isChecked: muteWorkshopSound,
            title: TXT_SETTING_PAGE.MUTE_SOUND,
            handleCheck: () => dispatch(toggleMuteWorkshopSound())
        },
        {
            isChecked: enableNotifications,
            title: TXT_SETTING_PAGE.ENABLE_NOTIFICATIONS,
            handleCheck: () => dispatch(toggleEnableNotifications())
        },
        {
            isChecked: enableVisualisator,
            title: TXT_SETTING_PAGE.ENABLE_VISUALISATOR,
            handleCheck: () => dispatch(toggleEnableVisualisator())
        },
        {
            isChecked: beAdorablePerson,
            title: TXT_SETTING_PAGE.ADORABLE,
            handleCheck: () => dispatch(toggleBeAdorablePerson())
        },
        {
            isChecked: showHistory,
            title: TXT_SETTING_PAGE.SHOW_HISTORY,
            handleCheck: () => dispatch(toggleShowHistory())
        }
    ], [
        muteWorkshopSound, 
        enableNotifications, 
        enableVisualisator, 
        beAdorablePerson, 
        showHistory
    ])

    return (
        <div
            className="w-full flex gap-[50px] overflow-y-auto p-[50px] pb-[120px] flex-col"
        >
            {settingOptions.map((item, index) => (
                <SettingOption 
                    key={index}
                    {...item}
                />
            ))}
        </div>
    )
}

export default SettingContainer