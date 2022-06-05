import React from "react";
import classes from './ProfileStatus.module.css';

class ProfileStates extends React.Component {

    state = {
        editMode: false,
        status: this.props.status,
    }

    activateEditMode = () =>  {
        this.setState({
            editMode: true
        });
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    render() {
        return (
            <div className={classes.status}>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={ this.activateEditMode}>{this.props.status || '--------'}</span>
                </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={ this.deactivateEditMode } value={this.state.status}></input>
                    </div>
                }
            </div>
        )
    }

}

export default ProfileStates;