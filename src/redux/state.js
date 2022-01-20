const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
    _state: {
        profilePage: {
            myPost: [
                {
                    id: 1,
                    message: "Hi! How are you?",
                },
                {
                    id: 2,
                    message: "Todo esta bien!!!",
                },
                {
                    id: 3,
                    message:
                        "Lorem, ipsum",
                },
            ],
            newPostText: "",
        },
        
        dialogsPage: {
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
        },
    },
    getState() {
        return this._state;
    },
    subscribe (observer) {
        this.rerenderEntireTree = observer;
    },
    rerenderEntireTree() {
        console.log("State changed");
    },
    addMessage () {
        let newMessage = {
            id: 7,
            message: this._state.dialogsPage.newMessageText,
        };
        this._state.dialogsPage.messageData.push(newMessage);
        this._state.dialogsPage.newMessageText = "";
        this.rerenderEntireTree(this._state);
    },
    updateNewMessageText (newCreateMessage) {
        this._state.dialogsPage.newMessageText = newCreateMessage;
        this.rerenderEntireTree(this._state);
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 4,
                message: this._state.profilePage.newPostText,
            };
            this._state.profilePage.myPost.push(newPost);
            this._state.profilePage.newPostText = "";
            this.rerenderEntireTree(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newCreatePost;
            this.rerenderEntireTree(this._state);
        } else if (action.type === 'ADD-MESSAGE') {
            let newMessage = {
                id: 7,
                message: this._state.dialogsPage.newMessageText,
            };
            this._state.dialogsPage.messageData.push(newMessage);
            this._state.dialogsPage.newMessageText = "";
            this.rerenderEntireTree(this._state);
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.newCreateMessage;
            this.rerenderEntireTree(this._state);
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostChangeActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newCreatePost: text });

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageChangeActionCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_TEXT, newCreateMessage: body });

export default store;
window.store = store;
