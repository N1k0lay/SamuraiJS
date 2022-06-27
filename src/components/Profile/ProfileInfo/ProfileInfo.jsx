import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader/Preloader";
import avatar from "../../../assets/img/avatar.jpeg";
import {useState} from "react";
import ProfileDataForm from "./ProfileDataForm";
import ProfileData from "./ProfileData";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    let [editMode, setEditMode] = useState(false);

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
                {editMode
                    ? <ProfileDataForm profile={profile}
                                       status={status}
                                       updateStatus={updateStatus}
                                       isOwner={isOwner}
                                       goToEditMode={() => {
                                           setEditMode(false)
                                       }}
                                       saveProfile={saveProfile}/>
                    : <ProfileData profile={profile}
                                   status={status}
                                   updateStatus={updateStatus}
                                   isOwner={isOwner}
                                   goToEditMode={() => {
                                       setEditMode(true)
                                   }}/>}
            </div>

        </div>
    )
}


export default ProfileInfo;