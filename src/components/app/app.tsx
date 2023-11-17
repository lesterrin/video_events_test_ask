import React from 'react';
import './app.css';
import EventsListContainer from "../events-list/events-list-container";
import VideoPlayer from "../video-player/video-player";

function App() {
  return (
      <>
        <VideoPlayer/>
        <EventsListContainer/>
      </>
  );
}

export default App;
