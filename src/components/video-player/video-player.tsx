import React, {FC, ReactElement, useEffect} from "react";
import s from "./video-player.module.css";
import {EventType} from "../../types";

const VideoPlayer: FC<PropsType> = ({isPlayed, timestamp, isForcedTimestamp, activeEventsElements,
                                  togglePlay, setTimestamp}) => {

    const videoRef = React.createRef<HTMLVideoElement>(); //изучить

    useEffect(() => {
        const videoElement = videoRef.current;

        if (isPlayed && videoElement) {
            videoElement.play();
        }

        if (!isPlayed && videoElement) {
            videoElement.pause();
        }

        if (videoElement && isForcedTimestamp) {
            //currentTime обрубается после 6 знака после запятой,
            //из-за чего метка устанавливается чуть раньше события,
            //поэтому добавляем 0.000001
            videoElement.currentTime = timestamp + 0.000001;
        }
    });

    const handleTimeUpdate = () => {
        if(videoRef.current) setTimestamp(videoRef.current.currentTime);
    }

    return (
        <div className={s.videoPlayerComponentWrapper}>
            <div>Время - {timestamp}</div>
            <br/>
            <div onClick={togglePlay} className={s.videoPlayerWrapper}>
                {activeEventsElements}
                <video ref={videoRef}
                       onTimeUpdate={handleTimeUpdate}
                       src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4">
                </video>
            </div>
        </div>
    )
}

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

export default VideoPlayer;