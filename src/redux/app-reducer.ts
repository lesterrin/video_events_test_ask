import {getEventsList} from '../api/api';
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {EventType, InferActionsTypes} from "../types";

const initialState = {
    isInitialized: false as boolean,
    eventsListData: [] as Array<EventType>,
    link: '' as string,
    isPlayed: false as boolean,
    timestamp: 0 as number,
    isForcedTimestamp: false as boolean,
    activeEvents: [] as Array<EventType>
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
        togglePlay(state) {
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

                if (state.timestamp >= e.timestamp && state.timestamp <= eventEnd)
                    return e;
            })
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(initializeApp.fulfilled, (state, action) =>{
                state.isInitialized = action.payload;
                state.eventsListData = action.payload;
                /*appSlice.caseReducers.toggleIsInitialized(state,{payload: true});
                appSlice.caseReducers.setEventsList(state,{payload: action.payload});*/
            })
    }
});

const { actions, reducer } = appSlice;

export const initializeApp = createAsyncThunk(
    'app/initializeApp', //
    async () => await getEventsList()
);

export const updateTimestamp = (timestamp: number, isForced = false): ThunkType => (dispatch) => {
    dispatch(setTimestamp(timestamp));
    dispatch(setActiveEvents());
    dispatch(setIsForcedTimestamp(isForced));
};

type ActionsTypes = InferActionsTypes<typeof actions>;
export type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsTypes>;

export const {
    togglePlay,
    setTimestamp,
    setIsForcedTimestamp,
    setActiveEvents
} = actions;

export default reducer;