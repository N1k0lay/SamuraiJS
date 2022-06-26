import {profileAPI} from "../API/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

let initialState = {
    posts: [
        {id: 1, post: 'Hi, how are you?!', likesCount: '122'},
        {id: 2, post: `It's my first post`, likesCount: '32'},
        {id: 3, post: `LOOOOL`, likesCount: 'xD'},
        {id: 4, post: `YEEEEEEAAAAH`, likesCount: '2022'},],
    newPostText: 'it-kamasutra.ru',
    profile: null,
    status: ``,
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5, post: state.newPostText, likesCount: 777,
            };
            return {
                ...state, posts: [...state.posts, newPost], newPostText: '',
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state, newPostText: action.newText,
            };
        case SET_USER_PROFILE: {
            return {
                ...state, profile: action.profile,
            }
        }
        case SET_STATUS: {
            return {
                ...state, status: action.status
            }
        }
        case DELETE_POST: {
            return {
                ...state,
                post: state.posts.filter(p => p.id != action.postId)
            }
        }
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: {...state.profile,
                    photos: action.photos

                }
            }
        }
        default:
            return state;
    }
};

export const addPostCreator = () => ({type: ADD_POST});
export const updateNewPostTextCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT, newText: text,
    }
};
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});

export const getUserProfile = (userId) => async (dispatch) => {
    let data = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(data));
};

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
};

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
};

export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
};

export default profileReducer;