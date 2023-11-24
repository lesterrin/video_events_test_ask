import React, {FC, ReactElement} from "react";
import s from './events-list.module.css';

const EventsList: FC<PropsType> = (props) => (
    <div className={s.eventsListTable}>{props.eventsList}</div>
);
export default EventsList;

type PropsType = {
    eventsList: Array<ReactElement>
};
