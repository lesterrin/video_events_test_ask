import React from "react";
import s from "./events-list-item.module.css";

const EventsListItem = ({setTimestamp, sourceTimestamp, timestamp, duration, zone: {height, left, top, width}}: any) => (
    <div className={s.hand} onClick={() => setTimestamp(sourceTimestamp)}>
        Метка: {timestamp} ({sourceTimestamp}) | Продолжительность: {duration} | h:{height} w:{width} | Положение
        top:{top} left:{left}</div>
)

export default EventsListItem;