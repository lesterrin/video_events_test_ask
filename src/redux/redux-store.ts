import { configureStore } from '@reduxjs/toolkit';

import appReducer from "./app-reducer";

const rootReducer = {app: appReducer};

const store = configureStore({
    reducer: rootReducer
});

export type AppStateType = ReturnType<typeof store.getState>;

export default store;