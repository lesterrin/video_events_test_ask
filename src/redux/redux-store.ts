import { configureStore } from '@reduxjs/toolkit';

import eventsListReducer from "./events-list-reducer";
import videoPlayerReducer from "./video-player-reducer";

const rootReducer = {eventsList: eventsListReducer, videoPlayer: videoPlayerReducer}

const store = configureStore({
    reducer: rootReducer
});

export default store;