import React,{FC} from "react";
import s from "./events-list-item.module.css";
import {EventZoneType} from "../../../types";

const EventsListItem: FC<EventsListItemPropsType> = ({setTimestamp, sourceTimestamp, timestamp, duration, zone: {height, left, top, width}}) => (
    <div className={s.hand} onClick={() => setTimestamp(sourceTimestamp)}>
        Метка: {timestamp} ({sourceTimestamp}) |
            Продолжительность: {duration} |
            h:{height} w:{width} |
            Положение top:{top} left:{left}</div>
)

export type EventsListItemPropsType = {
    setTimestamp: (sourceTimestamp: number) => void,
    sourceTimestamp: number,
    timestamp: string,
    duration: string,
    zone: EventZoneType
}

export default EventsListItem;