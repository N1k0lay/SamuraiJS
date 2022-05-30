import React from "react";
import classes from "./ProfileInfo.module.css";
import profileImg from '../../../assets/img/bee-on-daisy.jpg';
import Preloader from "../../common/preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }


    return (
        <div className={classes.profileInfo}>
            <div><img className={classes.cover} src={props.profile.photos.large} alt=""/></div>
            <div className={classes.info}>
                <img className={classes.avatar} src={props.profile.photos.small} alt=""/>
                <div className={classes.descriptionBlock}>
                    <div className={classes.fullName}>{props.profile.fullName}</div>
                    <div className={classes.text}>{props.profile.aboutMe}</div>
                </div>
            </div>

        </div>
    )
}

export default ProfileInfo;