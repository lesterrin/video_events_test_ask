import React, {FC} from "react";
import EventsList from "./events-list";
import {connect} from "react-redux";
import EventsListItem from "./events-list-item/events-list-item";
import {getEventsList} from "../../redux/app-selectors";
import {updateTimestamp} from "../../redux/app-reducer";
import {AppStateType} from "../../redux/redux-store";
import {EventZoneType} from "../../types";

const EventsListContainer: FC<PropsType> = ({eventsList, setTimestamp}) => {

    const eventsListElements = eventsList.map((item, i) => <EventsListItem key={`eli${i}`} {...item}
                                                                           setTimestamp={setTimestamp}/>);

    return (
        <EventsList eventsList={eventsListElements}/>
    );
}

const mapStateToProps = (state: AppStateType)=> {
    return {
        eventsList: getEventsList(state)
    };
};

const mapDispatchToProps = {
    setTimestamp: (timestamp: number) => updateTimestamp(timestamp, true)
}


type PropsType = MapStateToPropsType & MapDispatchToPropsType;

type FormatedEventType = {
    duration: string,
    sourceTimestamp: number,
    timestamp: string,
    zone: EventZoneType
}

type MapStateToPropsType = {
    eventsList: Array<FormatedEventType>
}

type MapDispatchToPropsType = {
    setTimestamp: (timestamp: number) => void
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsListContainer);