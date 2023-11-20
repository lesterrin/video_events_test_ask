import {getEventsList} from '../api/api';

const SET_EVENTS_LIST = "app/SET-EVENTS-LIST";
const TOGGLE_IS_FETCHING = "app/TOGGLE-IS-FETCHING";
const TOGGLE_PLAY = "app/TOGGLE-PLAY";
const SET_TIMESTAMP = "app/SET-TIMESTAMP";
const SET_ACTIVE_EVENTS = "app/SET-ACTIVE-EVENTS";

const initialState = {
    eventsListData: [] as Array<any>,
    isFetching: false as boolean,
    link: '' as string,
    isPlayed: false as boolean,
    timestamp: '0' as string,
    activeEvents: [] as Array<any>
};

const appReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case SET_EVENTS_LIST:
            return {
                ...state,
                eventsListData: [...action.eventsListData]
            }

        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
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

        case SET_ACTIVE_EVENTS:
            return {
                ...state,
                activeEvents: [...state.eventsListData].filter(e=>{
                    const eventEnd = e.timestamp + e.duration;
                    if (state.timestamp >= e.timestamp && state.timestamp <= eventEnd) return e;
                })
            }

        default:
            return state;
    }
}

export const setEventsList = (eventsListData: any) => ({type: SET_EVENTS_LIST, eventsListData});
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching});

export const requestEventsList = (): any =>
    async (dispatch: any) => {
        dispatch(toggleIsFetching(true));

        let data = await getEventsList();

        dispatch(toggleIsFetching(false));
        dispatch(setEventsList(data));
    }

export const togglePlay = () => ({type: TOGGLE_PLAY});
export const setTimestampTRUE = (timestamp: number) => ({type: SET_TIMESTAMP, timestamp});

export const setTimestamp = (timestamp: number) => (dispatch: (arg0: { type: string; timestamp?: number; }) => void) =>{
    dispatch(setTimestampTRUE(timestamp));
    dispatch(setActiveEvents());
};

export const setActiveEvents = () => ({type: SET_ACTIVE_EVENTS});

type initialStateType = typeof initialState;

export default appReducer;