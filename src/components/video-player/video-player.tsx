import React, {FC, ReactElement, useEffect} from "react";
import s from "./video-player.module.css";
import {EventType} from "../../types";
import {formatTime} from "../../helpers/helpers";

const VideoPlayer: FC<PropsType> = ({isPlayed, timestamp, isForcedTimestamp,
                                        activeEventsElements, togglePlay, setTimestamp}) => {

    const videoRef = React.createRef<HTMLVideoElement>();

    useEffect(() => {
        const videoElement = videoRef.current;

        if (isPlayed && videoElement) {
            videoElement.play();
        }

        if (!isPlayed && videoElement) {
            videoElement.pause();
        }

        if (videoElement && isForcedTimestamp) {
            videoElement.currentTime = timestamp + 0.000001;
        }
    });

    const handleTimeUpdate = () => {
        if(videoRef.current) setTimestamp(videoRef.current.currentTime);
    }

    return (
        <div className={s.videoPlayerComponentWrapper}>
            <br/>
            <div onClick={togglePlay} className={s.videoPlayerWrapper}>
                {activeEventsElements}
                <div className={s.iconWrapper}>
                    {isPlayed ? <div className={s.iconPause}></div> : <div className={s.iconPlay}></div>}
                </div>
                <div className={s.infoPanel}>{formatTime(timestamp)}</div>
                <video ref={videoRef}
                       onTimeUpdate={handleTimeUpdate}
                       src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4">
                </video>
            </div>
        </div>
    )
}

export default VideoPlayer;

type PropsType = {
    isPlayed: boolean,
    isForcedTimestamp: boolean,
    timestamp: number,
    activeEvents: Array<EventType>,
    togglePlay: () => void,
    setActiveEvents: () => void,
    setTimestamp: (timestamp: number) => void
    activeEventsElements: Array<ReactElement>
}