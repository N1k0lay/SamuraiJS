import classes from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import React from "react";

const ProfileData = ({profile, status, updateStatus, isOwner, goToEditMode}) => {
    return <div className={classes.descriptionBlock}>
        <div>{isOwner && <button onClick={goToEditMode}>Edit</button> }</div>
        <div className={classes.fullName}>{profile.fullName}</div>
        <div className={classes.text}><b>Status:</b> <ProfileStatusWithHooks status={status}
                                                                             updateStatus={updateStatus}/></div>
        <div><b>About me:</b> {profile.aboutMe}</div>
        <div><b>Looking for a job:</b> {profile.lookingForAJob ? "Yes" : "No"}
            {profile.lookingForAJob &&
                <div><b>My professional skills:</b> {profile.lookingForAJobDescription}</div>
            }
        </div>
        <div>
            <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
        </div>
    </div>
}

export const Contact = ({contactTitle, contactValue}) => {
    return <div className={classes.contactItem}><b>{contactTitle}:</b> {contactValue}</div>
}

export default ProfileData;