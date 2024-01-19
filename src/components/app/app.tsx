import React, {FC, useEffect} from 'react';
import './app.css';
import EventsListContainer from "../events-list/events-list-container";
import VideoPlayerContainer from "../video-player/video-player-container";
import {initializeApp} from "../../redux/app-reducer";
import Loader from "../loader/loader";
import {useAppDispatch, useAppSelector} from "../../redux/redux-store";
import {isInitializedSelector} from "../../redux/app-selectors";

const App: FC = () => {

    const isInitialized = useAppSelector(isInitializedSelector);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(initializeApp());

    }, []);

    if (!isInitialized) {
        return <Loader/>
    } else {
        return (
            <>
                <VideoPlayerContainer/>
                <EventsListContainer/>
            </>
        );
    }
}

export default App;