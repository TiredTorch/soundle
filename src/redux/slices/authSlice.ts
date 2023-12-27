import { User } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: {
    currentUser: User | null
} = {
    currentUser: {
        email: "a",
        id: "2",
        username: "Abobus"
    }
}

export const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {
        setUser: (
            state, action: PayloadAction<User>
        ) => {
            state.currentUser = action.payload
        },
        resetUser: (
            state
        ) => {
            state.currentUser = null
        }
    }
})

export const {
    resetUser,
    setUser
} = authSlice.actions