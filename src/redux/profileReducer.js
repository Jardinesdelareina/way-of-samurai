import { usersAPI } from "../api/api";

const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

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
  profile: null,
};

let profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let text = state.newPostText;
      return {
        ...state,
        newPostText: '',
        myPost: [...state.myPost, { id: 4, message: text }]
      };
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newCreatePost
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      };
    }
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostChangeActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT,newCreatePost: text,});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export const getUserProfile = (userId) => (dispatch) => {
  usersAPI.getProfile(userId).then(response => {
    dispatch(setUserProfile(response.data));
  });
}

export default profileReducer;
