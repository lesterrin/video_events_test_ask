import React, {createElement, FC} from "react";
import VideoPlayer from "./video-player";
import {updateTimestamp,togglePlay,setActiveEvents} from "../../redux/app-reducer";
import s from "./video-player.module.css";
import {useAppDispatch, useAppSelector} from "../../redux/redux-store";
import {EventType} from "../../types";
import {
    activeEventsSelector,
    isForcedTimestampSelector,
    isPlayedSelector,
    timestampSelector
} from "../../redux/app-selectors";

const VideoPlayerContainer: FC = () => {

    const dispatch = useAppDispatch();

    const addProps: AddPropsType = {
        isPlayed: useAppSelector(isPlayedSelector),
        isForcedTimestamp: useAppSelector(isForcedTimestampSelector),
        timestamp: useAppSelector(timestampSelector),
        activeEvents: useAppSelector(activeEventsSelector),
        togglePlay: () => dispatch(togglePlay()),
        setTimestamp: (timestamp) => dispatch(updateTimestamp(timestamp)),
        setActiveEvents: () => dispatch(setActiveEvents)
    };

    const activeEventsElements = addProps.activeEvents.map((e, i) => createElement('div', {
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
        <VideoPlayer {...addProps} activeEventsElements = {activeEventsElements}/>
    );
}

export default VideoPlayerContainer;

type AddPropsType = {
    isPlayed: boolean,
    isForcedTimestamp: boolean,
    timestamp: number,
    activeEvents: Array<EventType>,
    togglePlay: () => void,
    setTimestamp: (timestamp: number) => void,
    setActiveEvents: () => void
}