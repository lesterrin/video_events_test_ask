import React, {createElement, FC, useEffect} from "react";
import s from "./video-player.module.css";
import {setIsForcedTimestamp} from "../../redux/app-reducer";

const VideoPlayer: FC<any> = ({isPlayed, timestamp, isForcedTimestamp, togglePlay, setTimestamp, setActiveEvents, activeEvents}) => {
    const videoRef = React.createRef<HTMLVideoElement>(); //изучить
    const videoWrapperRef = React.createRef<HTMLDivElement>(); //изучить

    const activeEventsTags = activeEvents.map((e: any, i: any) => createElement('div', {
        className: s.exRect,
        key: `aet${i}`,
        style: {
            width: `${e.zone.width}px`,
            height: `${e.zone.height}px`,
            top: `${e.zone.top}px`,
            left: `${e.zone.left}px`
        }
    }));

    const handleTimeUpdate = (e: any) => {
        if (videoRef.current) {
            setTimestamp(e.target.currentTime);
            //setActiveEvents();
        }
    }

    useEffect(() => {
        const videoElement = videoRef.current;
        const videoWrapperElement = videoWrapperRef.current;

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


    return (
        <div className={s.videoPlayerComponentWrapper}>
            <div>{String(isPlayed)} - {timestamp}</div>
            <br/>
            <div ref={videoWrapperRef} onClick={togglePlay} className={s.videoPlayerWrapper}>
                {activeEventsTags}
                <video ref={videoRef}
                       onTimeUpdate={handleTimeUpdate}
                       src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4">
                </video>
            </div>
            <div className={s.activeEventsList}>{activeEvents.map((e: any, i: number) => <div
                key={i}>{e.timestamp} | {e.duration}</div>)}</div>
        </div>
    )
}

export default VideoPlayer;