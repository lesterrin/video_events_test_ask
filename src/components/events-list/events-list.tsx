import React, {FC} from "react";
import s from './events-list.module.css';

const EventsList: FC<any> = ({eventsList}) => {
    return (
        <div>{eventsList}</div>
    )
}

export default EventsList;