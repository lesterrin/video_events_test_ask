const TOGGLE_PLAY = "videPlayer/TOGGLE-PLAY";
const SET_TIMESTAMP = "videoPlayer/SET-TIMESTAMP";

const initialState = {
    link: '' as string,
    isPlayed: false as boolean,
    timestamp: 0 as number
};

const videoPlayerReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
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


        default:
            return state;
    }
}

export const togglePlay = () => ({type: TOGGLE_PLAY});
export const setTimestamp = (timestamp: number) => ({type: SET_TIMESTAMP, timestamp});

type initialStateType = typeof initialState;

export default videoPlayerReducer;