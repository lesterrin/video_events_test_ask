import React,{FC} from "react";
import s from "./events-list-item.module.css";
import {EventZoneType} from "../../../types";

const EventsListItem: FC<PropsType> = ({setTimestamp, sourceTimestamp, timestamp, duration,
                                                         zone: {height, left, top, width}}) => {
    return <div className={s.hand} onClick={() => setTimestamp(sourceTimestamp)}>
        Метка: {timestamp} ({sourceTimestamp}) |
        Продолжительность: {duration} |
        h:{height} w:{width} |
        top:{top} left:{left}</div>
}

export default EventsListItem;

export type PropsType = {
    setTimestamp: (sourceTimestamp: number) => void,
    sourceTimestamp: number,
    timestamp: string,
    duration: string,
    zone: EventZoneType
}