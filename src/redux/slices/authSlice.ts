import { createSlice } from "@reduxjs/toolkit";

const initialState: {
    userName: string | null;
} = {
    userName: "aboba"
}

export const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {}
})