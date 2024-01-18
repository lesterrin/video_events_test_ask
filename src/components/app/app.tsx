import React, {FC, useEffect} from 'react';
import './app.css';
import EventsListContainer from "../events-list/events-list-container";
import VideoPlayerContainer from "../video-player/video-player-container";
import {connect} from "react-redux";
import {initializeApp} from "../../redux/app-reducer-js";
import Loader from "../loader/loader";
import {AppStateType} from "../../redux/redux-store";

const App: FC<PropsType> = ({isInitialized, initializeApp}) => {
    useEffect(() => {
        initializeApp();
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
const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isInitialized: state.app.isInitialized
});

const AppContainer = connect(mapStateToProps, {initializeApp})(App);

export default AppContainer;

type PropsType = MapStateToPropsType & MapDispatchToPropsType;

type MapStateToPropsType = {
    isInitialized: boolean
};

type MapDispatchToPropsType = {
    initializeApp: ()=> void
};
