const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState =  {
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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}],
            };
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            }
        default:
            return state;
    }
};


export const updateNewMessageBodyCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body,
    }
};
export const sendMessageCreator = () => ({type: SEND_MESSAGE});


export default dialogsReducer;