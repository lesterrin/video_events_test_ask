import React, {FC} from "react";
import VideoPlayer from "./video-player";
import {connect} from "react-redux";
import {setTimestamp, togglePlay} from "../../redux/video-player-reducer";

const VideoPlayerContainer: FC<PropsType> = (props) => {
    return(
        <VideoPlayer {...props}/>
    );
}

const mapStateToProps = (state:any): MapStateToPropsType => {
    return {
        isPlayed: state.videoPlayer.isPlayed,
        timestamp: state.videoPlayer.timestamp
    };
};

type PropsType = MapStateToPropsType & MapDispatchToPropsType;

type MapStateToPropsType = {
    isPlayed: boolean,
    timestamp: number | string
}

type MapDispatchToPropsType = {
    togglePlay: ()=>void
}

export default connect(mapStateToProps,{togglePlay, setTimestamp})(VideoPlayerContainer);
