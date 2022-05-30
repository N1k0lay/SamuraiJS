import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map( dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>);
    let messagesElements = state.messages.map( message => <Message message={message.message} key={message.id}/>);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessageClick();
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {[dialogsElements]}
            </div>
            <div className={classes.messages}>
                <div>{[messagesElements]}</div>
                <div>
                    <textarea value={newMessageBody} onChange={onNewMessageChange}  placeholder='Enter your message'  name="addMessage" id="" cols="30" rows="3"></textarea>
                    <button onClick={onSendMessageClick}>Send Message</button>
                </div>
            </div>

        </div>
    )
};

export default Dialogs;