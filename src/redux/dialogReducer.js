const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let dialogsReducer = (state, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newPost = {
                id: 7,
                message: state.newMessageText,
            }
            state.messageData.push(newPost);
            state.newMessageText = "";
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newCreateMessage;
            return state;
        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageChangeActionCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_TEXT, newCreateMessage: body });

export default dialogsReducer;