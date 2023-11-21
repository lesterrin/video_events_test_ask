import React, {createElement, FC} from "react";
import VideoPlayer from "./video-player";
import {connect} from "react-redux";
import {setActiveEvents, updateTimestamp, togglePlay} from "../../redux/app-reducer";
import s from "./video-player.module.css";

const VideoPlayerContainer: FC<PropsType> = (props) => {
    console.log(props);
    const activeEventsElements = props.activeEvents.map((e: any, i: any) => createElement('div', {
        className: s.exRect,
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

const mapStateToProps = (state: any): MapStateToPropsType => {
    return {
        isPlayed: state.app.isPlayed,
        isForcedTimestamp: state.app.isForcedTimestamp,
        timestamp: state.app.timestamp,
        activeEvents: state.app.activeEvents
    };
};

type PropsType = MapStateToPropsType & MapDispatchToPropsType;

type MapStateToPropsType = {
    isPlayed: boolean,
    isForcedTimestamp: boolean,
    timestamp: number | string,
    activeEvents: Array<any>
}

type MapDispatchToPropsType = {
    togglePlay: () => void,
    setActiveEvents: () => void
}

export default connect(mapStateToProps, {togglePlay, setTimestamp: updateTimestamp, setActiveEvents})(VideoPlayerContainer);
