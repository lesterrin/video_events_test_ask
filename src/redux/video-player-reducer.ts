const TEST = "TEST";

const initialState = {
    link: '' as string
};

const videoPlayerReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case TEST:
            return {...state}

        default:
            return state;
    }
}

type initialStateType = typeof initialState;

export default videoPlayerReducer;