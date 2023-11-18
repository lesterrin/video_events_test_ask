import {formatTime} from "../helpers/helpers";

export const getEventsList = (state: any) => {
    return state.eventsList.eventsListData.map((e:any) => {
        return {
            timestamp: formatTime(e.timestamp),
            duration: formatTime(e.duration),
            zone: {...e.zone}
        }
    })
};