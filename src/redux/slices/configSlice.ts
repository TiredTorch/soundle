import { User } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: {
    muteWorkshopSound: boolean;
    enableNotifications: boolean;
    showHistory: boolean;
    beAdorablePerson: boolean;
    enableVisualisator: boolean;
} = {
    muteWorkshopSound: false,
    enableNotifications: false,
    showHistory: false,
    beAdorablePerson: true,
    enableVisualisator: false
}

export const configSlice = createSlice({
    name: "configSlice",
    initialState,
    reducers: {
        toggleMuteWorkshopSound: (
            store
        ) => {
            store.muteWorkshopSound = !store.muteWorkshopSound
        },
        toggleEnableNotifications: (
            store
        ) => {
            store.enableNotifications = !store.enableNotifications
        },
        toggleShowHistory: (
            store
        ) => {
            store.showHistory = !store.showHistory
        },
        toggleBeAdorablePerson: (
            store
        ) => {
            store.beAdorablePerson = !store.beAdorablePerson
        },
        toggleEnableVisualisator: (
            store
        ) => {
            store.enableVisualisator = !store.enableVisualisator
        }
    }
})

export const {
    toggleMuteWorkshopSound,
    toggleEnableNotifications,
    toggleShowHistory,
    toggleBeAdorablePerson,
    toggleEnableVisualisator
} = configSlice.actions