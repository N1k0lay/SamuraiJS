import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader/Preloader";
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
    if (!props.profile) {
        debugger
        return <Preloader/>
    }


    return (
        <div className={classes.profileInfo}>
            <div><img className={classes.cover} src={props.profile.photos.large} alt=""/></div>
            <div className={classes.info}>
                <img className={classes.avatar} src={props.profile.photos.small} alt=""/>
                <div className={classes.descriptionBlock}>
                    <div className={classes.fullName}>{props.profile.fullName}</div>
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                    <div className={classes.text}>{props.profile.aboutMe}</div>
                </div>
            </div>

        </div>
    )
}

export default ProfileInfo;