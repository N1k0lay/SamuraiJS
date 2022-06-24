import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader/>
    }


    return (
        <div className={classes.profileInfo}>
            <div><img className={classes.cover} src={profile.photos.large} alt=""/></div>
            <div className={classes.info}>
                <img className={classes.avatar} src={profile.photos.small} alt=""/>
                <div className={classes.descriptionBlock}>
                    <div className={classes.fullName}>{profile.fullName}</div>
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                    <div className={classes.text}>{profile.aboutMe}</div>
                </div>
            </div>

        </div>
    )
}

export default ProfileInfo;