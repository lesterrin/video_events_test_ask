import React, {createElement, FC, useEffect} from "react";
import s from "./video-player.module.css";
import {setIsForcedTimestamp} from "../../redux/app-reducer";

const VideoPlayer: FC<any> = ({isPlayed, timestamp, isForcedTimestamp, activeEventsElements,
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
            //почему-то currentTime обрубается после 6 знака после запятой,
            //из-за чего метка устанавливается чуть раньше события,
            //поэтому добавляется 0.000001
            videoElement.currentTime = timestamp + 0.000001;
        }
    });

    const handleTimeUpdate = (e: any) => {
        if (videoRef.current) {
            setTimestamp(e.target.currentTime);
        }
    }

    return (
        <div className={s.videoPlayerComponentWrapper}>
            <div>{String(isPlayed)} - {timestamp}</div>
            <br/>
            <div onClick={togglePlay} className={s.videoPlayerWrapper}>
                {activeEventsElements}
                <video ref={videoRef}
                       onTimeUpdate={handleTimeUpdate}
                       src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4">
                </video>
            </div>
            {/*<div className={s.activeEventsList}>{activeEvents.map((e: any, i: number) => <div
                key={i}>{e.timestamp} | {e.duration}</div>)}</div>*/}
        </div>
    )
}

export default VideoPlayer;