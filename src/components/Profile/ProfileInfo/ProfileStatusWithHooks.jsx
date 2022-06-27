import React, {useEffect, useState} from "react";
import classes from './ProfileStatus.module.css';

const ProfileStatesWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const activateMode = () => {
        setEditMode(true);
    };

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    };

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    };

    return (
        <div className={classes.status}>
            {!editMode &&
                <span className={classes.inline} onDoubleClick={activateMode}>{props.status || '--------'}</span>
            }
            {editMode &&
                <input className={classes.inline + ' ' + classes.input}
                       onBlur={deactivateEditMode}
                       onChange={onStatusChange}
                       value={status}
                       autoFocus={true}></input>
            }
        </div>
    )

}

export default ProfileStatesWithHooks;