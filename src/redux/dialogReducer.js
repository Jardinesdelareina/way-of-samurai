const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    nameData: [
        { id: 1, name: "oleg" },
        { id: 2, name: "sereja" },
        { id: 3, name: "kolya" },
        { id: 4, name: "lesha" },
        { id: 5, name: "dima" },
        { id: 6, name: "sasha" },
        { id: 7, name: "pasha" },
        { id: 8, name: "gena" },
    ],
    messageData: [
        { id: 1, message: "Hola" },
        { id: 2, message: "Que tal?" },
        { id: 3, message: "Que hora es?" },
        { id: 4, message: "Ahora es 4 de la tarde" },
        { id: 5, message: "Gracias!" },
        { id: 6, message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam numquam, quaerat eos reiciendis qui laudantium nihil? Cupiditate voluptatem ex, aliquam dolores accusamus, amet, sint commodi fuga consequuntur ad officiis eum." },
    ],
    newMessageText: "",
}

let dialogsReducer = (state = initialState, action) => {

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