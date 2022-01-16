let rerenderEntireTree = () => {
    console.log("State changed");
}

let state = {
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
};

window.state = state;

// Добавление нового поста в профиле
export const addPost = () => {
    let newPost = {
        id: 4,
        message: state.profilePage.newPostText,
    };
    state.profilePage.myPost.push(newPost);
    state.profilePage.newPostText = "";
    rerenderEntireTree(state);
}

export const updateNewPostText = (newCreatePost) => {
    state.profilePage.newPostText = newCreatePost;
    rerenderEntireTree(state);
}

// Добавление нового сообщения в диалогах
export const addMessage = () => {
    let newMessage = {
        id: 7,
        message: state.dialogsPage.newMessageText,
    };
    state.dialogsPage.messageData.push(newMessage);
    state.dialogsPage.newMessageText = "";
    rerenderEntireTree(state);
}

export const updateNewMessageText = (newCreateMessage) => {
    state.dialogsPage.newMessageText = newCreateMessage;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;