import {getEventsList} from '../api/api';
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isInitialized: false,
    eventsListData: [],
    link: '',
    isPlayed: false,
    timestamp: 0,
    isForcedTimestamp: false,
    activeEvents: []
};

const appSlice = createSlice({
    name: 'app',
    initialState: initialState,
    reducers: {
        toggleIsInitialized(state, action) {
            state.isInitialized = action.payload;
        },
        setEventsList(state, action) {
            state.eventsListData = action.payload;
        },
        togglePlay(state,action) {
            console.log(action);
            state.isPlayed = !state.isPlayed;
        },
        setTimestamp(state, action) {
            state.timestamp = action.payload;
        },
        setIsForcedTimestamp(state, action) {
            state.isForcedTimestamp = action.payload;
        },
        setActiveEvents(state) {
            state.activeEvents = state.eventsListData.filter(e => {
                const eventEnd = e.timestamp + e.duration;
                if (state.timestamp >= e.timestamp && state.timestamp <= eventEnd) return e;
            })
        }
    },
    extraReducers: (builder) => {

    }
});

const { actions, reducer } = appSlice;

export const {
    toggleIsInitialized,
    setEventsList,
    togglePlay,
    setTimestamp,
    setIsForcedTimestamp,
    setActiveEvents
} = actions;

export const initializeApp = () => async (dispatch) => {
    let data = await getEventsList();

    dispatch(toggleIsInitialized(true));
    dispatch(setEventsList(data));
}

export const updateTimestamp = (timestamp, isForced = false) => (dispatch) => {
    dispatch(setTimestamp(timestamp));
    dispatch(setActiveEvents());
    dispatch(setIsForcedTimestamp(isForced));
};

export default reducer;