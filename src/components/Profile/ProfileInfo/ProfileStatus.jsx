import React from "react";
import classes from './ProfileStatus.module.css';

class ProfileStates extends React.Component {
    state = {
        editMode: false,
        title: 'Ye'
    }

    activateEditMode()  {
        this.setState({
            editMode: true
        });
    }
    deactivateEditMode()  {
        this.setState({
            editMode: false
        });
    }

    render() {
        return (
            <div className={classes.status}>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={ this.activateEditMode.bind(this)}>{this.props.status}</span>
                </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={ this.deactivateEditMode.bind(this) } value={this.props.status}></input>
                    </div>
                }
            </div>
        )
    }

}

export default ProfileStates;