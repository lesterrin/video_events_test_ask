import React, {FC, useEffect} from "react";
import EventsList from "./events-list";
import {requestEventsList} from "../../redux/events-list-reducer";
import {connect} from "react-redux";
import EventsListItem from "./events-list-item/events-list-item";
import {getEventsList} from "../../redux/events-list-selectors";
import Loader from "../loader/loader";
import {setTimestamp} from "../../redux/video-player-reducer";

const EventsListContainer: FC<PropsType> = ({eventsList, isFetching, requestEventsList, setTimestamp}) => {

    useEffect(() => {
        requestEventsList();
    }, []);

    eventsList = eventsList.map((item, i) => <EventsListItem key={i} {...item} setTimestamp={setTimestamp}/>);

    return (
        isFetching ? <Loader/> : <EventsList eventsList={eventsList}/>
    );
}

const mapStateToProps = (state:any): MapStateToPropsType => {
    return {
        eventsList: getEventsList(state),
        isFetching: state.eventsList.isFetching
    };
};

type PropsType = MapStateToPropsType & MapDispatchToPropsType;

type MapStateToPropsType = {
    eventsList: Array<any>,
    isFetching: boolean
}

type MapDispatchToPropsType = {
    requestEventsList: () => void,
    setTimestamp: (timestamp: number) => void
}

export default connect(mapStateToProps,{requestEventsList,setTimestamp})(EventsListContainer);