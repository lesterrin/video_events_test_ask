import React, {FC, useEffect} from "react";
import EventsList from "./events-list";
import {requestEventsList} from "../../redux/events-list-reducer";
import {connect} from "react-redux";
import EventsListItem from "./events-list-item/events-list-item";

const EventsListContainer: FC<PropsType> = ({eventsList,requestEventsList}) => {

    useEffect(() => {
        requestEventsList();
    }, []);

    console.log(eventsList);

    eventsList = eventsList.map(item => <EventsListItem {...item} />);

    return (
        <EventsList eventsList={eventsList}/>
    );
}

const mapStateToProps = ({eventsList}:any): MapStatePropsType => (eventsList);

type PropsType = MapStatePropsType & MapDispatchPropsType;

type MapStatePropsType = {
    eventsList: Array<any>,
}

type MapDispatchPropsType = {
    requestEventsList: () => void;
}

export default connect(mapStateToProps,{requestEventsList})(EventsListContainer);