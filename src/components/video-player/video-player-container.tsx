import React, {FC} from "react";
import VideoPlayer from "./video-player";
import {connect} from "react-redux";
import {setActiveEvents, updateTimestamp, togglePlay} from "../../redux/app-reducer";

const VideoPlayerContainer: FC<PropsType> = (props) => {
    return (
        <VideoPlayer {...props}/>
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
