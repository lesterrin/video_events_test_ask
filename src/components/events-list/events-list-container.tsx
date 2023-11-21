import React, {FC} from "react";
import EventsList from "./events-list";
import {initializeApp} from "../../redux/app-reducer";
import {connect} from "react-redux";
import EventsListItem from "./events-list-item/events-list-item";
import {getEventsList} from "../../redux/app-selectors";
import {updateTimestamp} from "../../redux/app-reducer";

const EventsListContainer: FC<PropsType> = ({eventsList, setTimestamp}) => {

    eventsList = eventsList.map((item, i) => <EventsListItem key={`eli${i}`} {...item} setTimestamp={setTimestamp}/>);

    return (
        <EventsList eventsList={eventsList}/>
    );
}

const mapStateToProps = (state: any): MapStateToPropsType => {
    return {
        eventsList: getEventsList(state)
    };
};

const mapDispatchProps = {
    requestEventsList: initializeApp,
    setTimestamp: (timestamp: number, isForced: boolean) => updateTimestamp(timestamp, true)
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType;

type MapStateToPropsType = {
    eventsList: Array<any>
}

type MapDispatchToPropsType = {
    requestEventsList: () => void,
    setTimestamp: (timestamp: number, isForced: boolean) => void
}

export default connect(mapStateToProps, mapDispatchProps)(EventsListContainer);