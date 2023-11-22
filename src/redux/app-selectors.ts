import {formatTime} from "../helpers/helpers";
import {AppStateType} from "./redux-store";
import {EventType} from "../types";

export const getEventsList = (state: AppStateType) => {
    return state.app.eventsListData.map((e: EventType) => {
        return {
            sourceTimestamp: e.timestamp,
            timestamp: formatTime(e.timestamp),
            duration: formatTime(e.duration),
            zone: {...e.zone}
        }
    })
};