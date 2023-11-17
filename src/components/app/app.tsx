import React from 'react';
import './app.css';
import EventsListContainer from "../events-list/events-list-container";
import VideoPlayerContainer from "../video-player/video-player-container";

function App() {
  return (
      <>
        <VideoPlayerContainer/>
        <EventsListContainer/>
      </>
  );
}

export default App;
