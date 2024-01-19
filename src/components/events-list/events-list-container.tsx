import React, {FC} from "react";
import EventsList from "./events-list";
import EventsListItem from "./events-list-item/events-list-item";
import {getEventsListSelector} from "../../redux/app-selectors";
import {updateTimestamp} from "../../redux/app-reducer";
import {useAppDispatch, useAppSelector} from "../../redux/redux-store";

const EventsListContainer: FC = () => {

    const dispatch = useAppDispatch();

    const eventsList = useAppSelector(getEventsListSelector);

    const setTimestamp = (timestamp: number)  => {
        dispatch(updateTimestamp(timestamp, true));
    }

    const eventsListElements = eventsList.map((item, i) => (
        <EventsListItem key={`eli${i}`} {...item} setTimestamp={setTimestamp}/>
    ));

    return <EventsList eventsList={eventsListElements}/>;
};

export default EventsListContainer;