import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { setupListeners } from "@reduxjs/toolkit/query";
import { 
    authSlice 
} from "../slices";
import { 
    postsService, 
    friendsService,
    userService
} from "../api";

const reducers = {
    [authSlice.name]: authSlice.reducer,
    [userService.reducerPath]: userService.reducer,
    [postsService.reducerPath]: postsService.reducer,
    [friendsService.reducerPath]: friendsService.reducer,
}

const combinedReducer = combineReducers<typeof reducers>(reducers);

export const appStore = configureStore({
    reducer: combinedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
        userService.middleware,
        postsService.middleware,
        friendsService.middleware
    ])
})

setupListeners(appStore.dispatch)

export type RootReduxState = typeof appStore;
export type AppDispatch = RootReduxState["dispatch"];
export type RootState = ReturnType<typeof combinedReducer>;

export const useTypedDispatch = () => useDispatch<AppDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;