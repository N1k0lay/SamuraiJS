import {authAPI} from "../API/api";

const SET_USET_DATA = 'SET_USET_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USET_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true,
                }
        }
        default:
            return state;
    }
};

export const setAuthUserData = (userId, email, login) => ({ type: SET_USET_DATA, data: {userId, email, login}});
export const getAuthUserData = () => (dispatch) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data;
                dispatch(setAuthUserData(id, email, login));
            }
        });
};


export default authReducer;