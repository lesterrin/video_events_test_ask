import React, {FC, useEffect} from "react";
import EventsList from "./events-list";
import {requestEventsList} from "../../redux/app-reducer";
import {connect} from "react-redux";
import EventsListItem from "./events-list-item/events-list-item";
import {getEventsList} from "../../redux/app-selectors";
import Loader from "../loader/loader";
import {setTimestamp} from "../../redux/app-reducer";

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
        isFetching: state.app.isFetching
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