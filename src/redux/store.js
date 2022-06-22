import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts:  [
                {id: 1, post: 'Hi, how are you?!', likesCount: '122'},
                {id: 2, post: `It's my first post`, likesCount: '32'},
                {id: 3, post: `LOOOOL`, likesCount: 'xD'},
                {id: 4, post: `YEEEEEEAAAAH`, likesCount: '2022'},
            ],
            newPostText: 'it-kamasutra.ru',
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Димыч'},
                {id: 2, name: 'Эндрю'},
                {id: 3, name: 'Света'},
                {id: 4, name: 'Саша'},
                {id: 5, name: 'Виктор'},
                {id: 6, name: 'Валера'},
            ],
            messages: [
                {id: 1, message: 'Привет!'},
                {id: 2, message: 'Как дела?'},
                {id: 3, message: 'Что делаешь?'},
                {id: 4, message: 'Пошли гулять!'},
                {id: 5, message: 'Буду через 5 минут'},
                {id: 6, message: 'Я взял мяч'},
            ],
            newMessageBody: '',
        },
        sidebar: {},
    },
    _callSubscriber () {
        console.log('state was changed');
    },

    getState () {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    },
};

//window.state = store._state;


export default store;