import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import avatar from "../../../assets/img/avatar.jpeg";


const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {
    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    return (
        <div className={classes.profileInfo}>
            <div><img className={classes.cover} src={profile.photos.large || avatar} alt=""/></div>
            <div className={classes.info}>
                <div className={classes.avatarBlock}>
                    <img className={classes.avatar} src={profile.photos.small || avatar} alt=""/>
                    {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
                </div>
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