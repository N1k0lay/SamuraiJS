import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {ErrorMessage, Field, Form, Formik} from "formik";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map( dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>);
    let messagesElements = state.messages.map( message => <Message message={message.message} key={message.id}/>);
    // let newMessageBody = state.newMessageBody;
    //
    // let onSendMessageClick = () => {
    //     props.sendMessageClick();
    // }
    // let onNewMessageChange = (e) => {
    //     let body = e.target.value;
    //     props.updateNewMessageBody(body);
    // }


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {[dialogsElements]}
            </div>
            <div className={classes.messages}>
                <div>{[messagesElements]}</div>
                <div>
                    <AddMessage updateNewMessageBody={props.updateNewMessageBody} sendMessageClick={props.sendMessageClick}/>
                </div>
            </div>

        </div>
    )
};



const AddMessage = (props) => {
    return <div>
        <Formik
            initialValues={{
                postText: ''
            }}
            onSubmit={(value, {resetForm}) => {
                props.updateNewMessageBody(value.postText);
                props.sendMessageClick();
                resetForm();
            }}
        >
            {() => (<Form>
                <div>
                    <Field type={'postText'} name={'postText'} placeholder={`Введите текст сообщения...`}/>
                </div>
                <ErrorMessage name="postText" component="div"/>

                <button type={'submit'}>Запостить</button>
            </Form>)}
        </Formik>
    </div>
};

export default Dialogs;