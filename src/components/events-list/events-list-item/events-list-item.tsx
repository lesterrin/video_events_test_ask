import React from "react";
import s from "./events-list-item.module.css";

const EventsListItem = ({setTimestamp, sourceTimestamp, timestamp, duration, zone: {height, left, top, width}}:any) => {

    return(
        <div className={s.hand} onClick={()=>setTimestamp(sourceTimestamp)}>Метка: {timestamp} | Продолжительность: {duration} | Площадь: {height}x{width} | Положение {top}x{left}</div>
    )
}

export default EventsListItem;