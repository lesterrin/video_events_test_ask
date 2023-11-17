import React from "react";

const EventsListItem = ({timestamp, duration, zone: {height, left, top, width}}:any) => {
    return(
        <div>Метка: {timestamp} | Продолжительность: {duration} | Площадь: {height}x{width} | Положение {top}x{left}</div>
    )
}

export default EventsListItem;