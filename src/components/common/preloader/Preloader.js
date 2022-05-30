import style from "./Preloader.module.css";
import loader from "../../../assets/img/loader.svg";
import React from "react";

let Preloader = (props) => {
    return (
        <div className={style.preloader}>
            <img alt='preloader' src={loader}/>
        </div>
    )

};

export default Preloader;