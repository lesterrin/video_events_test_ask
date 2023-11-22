import React from "react";
import s from './loader.module.css';

const Loader = () => (
    <div className={s.loaderWrapper}>
        <div className={s.ldsDefault}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
)

export default Loader;