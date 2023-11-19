import React, {FC, useEffect} from "react";
import s from "./video-player.module.css";

const VideoPlayer: FC<any> = ({isPlayed, timestamp, togglePlay, setTimestamp}) => {
    const videoRef = React.createRef<HTMLVideoElement>(); //изучить

    const handleTimeUpdate = (e:any) => {
        if (videoRef.current) {
            setTimestamp(e.target.currentTime);
        }
    }
    useEffect(() => {
        const videoElement = videoRef.current;

        if (isPlayed && videoElement) {
            videoElement.play();
        }

        if (!isPlayed && videoElement) {
            videoElement.pause();
        }

        if (videoElement) {
            videoElement.currentTime = timestamp;
        }
    });


    return (
        <>
            <div>{String(isPlayed)} - {timestamp}</div>
            <button type="button" onClick={togglePlay}>togglePlay</button>
            <button type="button" onClick={() => setTimestamp(124)}>set time 124</button>
            <br/>
            <video width={200}
                   height={200}
                   ref={videoRef}
                   onTimeUpdate={handleTimeUpdate}
                   src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" controls>
            </video>
        </>
    )
}

export default VideoPlayer;