const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
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
      message: "Lorem, ipsum",
    },
  ],
  newPostText: "",
};

let profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 4,
        message: state.newPostText,
      };
      state.myPost.push(newPost);
      state.newPostText = "";
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newCreatePost;
      return state;
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostChangeActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newCreatePost: text,
});

export default profileReducer;
