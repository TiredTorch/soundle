import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { setupListeners } from "@reduxjs/toolkit/query";
import { authSlice } from "../slices/authSlice";
import { postsService } from "../api/postsService/postsService";

const reducers = {
    [authSlice.name]: authSlice.reducer,
    [postsService.reducerPath]: postsService.reducer
}

const combinedReducer = combineReducers<typeof reducers>(reducers);

export const appStore = configureStore({
    reducer: combinedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
        postsService.middleware
    ])
})

setupListeners(appStore.dispatch)

export type RootReduxState = typeof appStore;
export type AppDispatch = RootReduxState["dispatch"];
export type RootState = ReturnType<typeof combinedReducer>;

export const useTypedDispatch = () => useDispatch<AppDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;