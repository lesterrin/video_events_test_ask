import {getEventsList} from '../api/api';
import {EventType, InferActionsTypes} from "../types";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";

const SET_EVENTS_LIST = "app/SET-EVENTS-LIST";
const TOGGLE_IS_INITIALIZED = "app/TOGGLE-IS-INITIALIZED";
const TOGGLE_PLAY = "app/TOGGLE-PLAY";
const SET_TIMESTAMP = "app/SET-TIMESTAMP";
const SET_ACTIVE_EVENTS = "app/SET-ACTIVE-EVENTS";
const SET_IS_FORCED_TIMESTAMP = "app/SET-IS-FORCED-TIMESTAMP";

const initialState = {
    isInitialized: false as boolean,
    eventsListData: [] as Array<EventType>,
    link: '' as string,
    isPlayed: false as boolean,
    timestamp: 0 as number,
    isForcedTimestamp: false as boolean,
    activeEvents: [] as Array<EventType>
};

const appReducer = (state = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {

        case TOGGLE_IS_INITIALIZED:
            return {
                ...state,
                isInitialized: action.isInitialized
            }

        case SET_EVENTS_LIST:
            return {
                ...state,
                eventsListData: [...action.eventsListData]
            }

        case TOGGLE_PLAY:
            return {
                ...state,
                isPlayed: !state.isPlayed
            }

        case SET_TIMESTAMP:
            return {
                ...state,
                timestamp: action.timestamp
            }

        case SET_IS_FORCED_TIMESTAMP:
            return {
                ...state,
                isForcedTimestamp: action.isForced
            }

        case SET_ACTIVE_EVENTS:
            return {
                ...state,
                activeEvents: [...state.eventsListData].filter(e => {
                    const eventEnd = e.timestamp + e.duration;
                    if (state.timestamp >= e.timestamp && state.timestamp <= eventEnd) return e;
                })
            }

        default:
            return state;
    }
}

export const actions = {
    toggleIsInitialized: (isInitialized: boolean) => ({type: TOGGLE_IS_INITIALIZED, isInitialized: isInitialized} as const),
    setEventsList: (eventsListData: Array<EventType>) => ({type: SET_EVENTS_LIST, eventsListData} as const),
    togglePlay: () => ({type: TOGGLE_PLAY} as const),
    setTimestamp: (timestamp: number) => ({type: SET_TIMESTAMP, timestamp} as const),
    setIsForcedTimestamp: (isForced: boolean) => ({type: SET_IS_FORCED_TIMESTAMP, isForced} as const),
    setActiveEvents: () => ({type: SET_ACTIVE_EVENTS} as const)
}

type ActionsTypes = InferActionsTypes<typeof actions>;

export const initializeApp = (): ThunkType => async (dispatch) => {
    let data = await getEventsList();

    dispatch(actions.toggleIsInitialized(true));
    dispatch(actions.setEventsList(data));
}

export const updateTimestamp = (timestamp: number, isForced: boolean = false): ThunkType => (dispatch) => {
    dispatch(actions.setTimestamp(timestamp));
    dispatch(actions.setActiveEvents());
    dispatch(actions.setIsForcedTimestamp(isForced));
};

export type DispatchType = Dispatch<ActionsTypes>;
export type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsTypes>;

export type initialStateType = typeof initialState;

export default appReducer;