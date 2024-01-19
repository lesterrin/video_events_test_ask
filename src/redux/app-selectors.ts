import {formatTime} from "../helpers/helpers";
import {AppStateType} from "./redux-store";
import {EventType} from "../types";

export const getEventsListSelector = (state: AppStateType) => {
    return state.app.eventsListData.map((e: EventType) => {
        return {
            sourceTimestamp: e.timestamp,
            timestamp: formatTime(e.timestamp),
            duration: formatTime(e.duration),
            zone: {...e.zone}
        }
    })
};

export const isPlayedSelector = (state: AppStateType) => state.app.isPlayed;
export const isForcedTimestampSelector = (state: AppStateType) => state.app.isForcedTimestamp;
export const timestampSelector = (state: AppStateType) => state.app.timestamp;
export const activeEventsSelector = (state: AppStateType) => state.app.activeEvents;
export const isInitializedSelector = (state: AppStateType) => state.app.isInitialized;