import {getEventsList} from '../api/api';

const SET_EVENTS_LIST = "eventsList/SET-EVENTS-LIST";
const TOGGLE_IS_FETCHING = "eventsList/TOGGLE-IS-FETCHING";

const initialState = {
    eventsListData: [] as Array<{}>,
    isFetching: false as boolean
};

const eventsListReducer = (state = initialState, action: any): initialStateType => {
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

type initialStateType = typeof initialState;

export default eventsListReducer;