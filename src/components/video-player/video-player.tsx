import React from "react";
import s from "./video-player.module.css";

const VideoPlayer = () => {
    return (
        <>
            <div>VideoPlayer</div>

            <video src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" controls>
            </video>
        </>
    )
}

export default VideoPlayer;