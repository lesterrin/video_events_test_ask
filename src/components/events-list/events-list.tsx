import React, {FC} from "react";
import s from './events-list.module.css';

const EventsList: FC<PropsType> = (props) => {
    return (
        <div className={s.eventsListTable}>{props.eventsList}</div>
    )
}

type PropsType = {
    eventsList: Array<any>
};

export default EventsList;