import React, {createElement, FC} from "react";
import VideoPlayer from "./video-player";
import {connect} from "react-redux";
import {updateTimestamp,togglePlay,setActiveEvents} from "../../redux/app-reducer-js";
import s from "./video-player.module.css";
import {AppStateType} from "../../redux/redux-store";
import {EventType} from "../../types";

const VideoPlayerContainer: FC<PropsType> = (props) => {

    const activeEventsElements = props.activeEvents.map((e, i) => createElement('div', {
        className: s.rect,
        key: `aet${i}`,
        style: {
            width: `${e.zone.width}px`,
            height: `${e.zone.height}px`,
            top: `${e.zone.top}px`,
            left: `${e.zone.left}px`
        }
    }));

    return (
        <VideoPlayer {...props} activeEventsElements={activeEventsElements}/>
    );
}


const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isPlayed: state.app.isPlayed,
        isForcedTimestamp: state.app.isForcedTimestamp,
        timestamp: state.app.timestamp,
        activeEvents: state.app.activeEvents
    };
};

export default connect(mapStateToProps, {
    togglePlay: togglePlay,
    setTimestamp: updateTimestamp,
    setActiveEvents: setActiveEvents
// @ts-ignore временно
})(VideoPlayerContainer);

type PropsType = MapStateToPropsType & MapDispatchToPropsType;

type MapStateToPropsType = {
    isPlayed: boolean,
    isForcedTimestamp: boolean,
    timestamp: number,
    activeEvents: Array<EventType>
}

type MapDispatchToPropsType = {
    togglePlay: () => void,
    setTimestamp: (timestamp: number) => void,
    setActiveEvents: () => void
}