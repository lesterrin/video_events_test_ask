import React, {FC} from "react";
import VideoPlayer from "./video-player";
import {connect} from "react-redux";
import {setActiveEvents, setTimestamp, togglePlay} from "../../redux/app-reducer";

const VideoPlayerContainer: FC<PropsType> = (props) => {
    return(
        <VideoPlayer {...props}/>
    );
}

const mapStateToProps = (state:any): MapStateToPropsType => {
    return {
        isPlayed: state.app.isPlayed,
        timestamp: state.app.timestamp,
        activeEvents: state.app.activeEvents
    };
};

type PropsType = MapStateToPropsType & MapDispatchToPropsType;

type MapStateToPropsType = {
    isPlayed: boolean,
    timestamp: number | string,
    activeEvents: Array<any>
}

type MapDispatchToPropsType = {
    togglePlay: ()=>void,
    setActiveEvents: ()=>void
}

export default connect(mapStateToProps,{togglePlay, setTimestamp,setActiveEvents})(VideoPlayerContainer);
