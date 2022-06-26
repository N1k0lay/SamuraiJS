import React from "react";
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {ErrorMessage, Field, Form, Formik} from "formik";

const MyPosts = (props) =>  {
    let postElements = props.posts.map(p => <Post key={p.id} message={p.post} like={p.likesCount}/>);

    let onAddPost = () => {
        props.addPost();
    }

    return (
        <div className={classes.myPostsBlock}>
        My Posts
        <div>
            <AddPostForm newPostText={props.newPostText}
                         updateNewPostText={props.updateNewPostText}
                         onAddPost={onAddPost}/>
        </div>
        <div>
            {[postElements]}
        </div>
    </div>
    )
};

const AddPostForm = (props) => {
    return <div>
        <Formik
            initialValues={{
                postText: ''
            }}
            onSubmit={(value, {resetForm}) => {
                props.updateNewPostText(value.postText);
                props.onAddPost();
                resetForm();
            }}
        >
            {() => (<Form>
                <div>
                    <Field type={'postText'} name={'postText'} placeholder={`Введите текст поста...`}/>
                </div>
                <ErrorMessage name="postText" component="div"/>

                <button type={'submit'}>Запостить</button>
            </Form>)}
        </Formik>
    </div>
};
export default MyPosts;