import { profileAPI, usersAPI } from "../api/api";
import { MyPostType, ProfileType } from '../types/types';

const ADD_POST = "ADD_POST";
const DELETE_POST = "DELETE_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

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
  ] as Array<MyPostType>,
  profile: null as ProfileType | null,
  newPostText: "",
  status: "",
};

let profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let text = action.newPostText;
      return {
        ...state,
        myPost: [...state.myPost, { id: 4, message: text }]
      };
    }
    case DELETE_POST: {
      return {
        ...state,
        myPost: state.myPost.filter((p) => p.id !== action.postId)
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      };
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status
      };
    }
    default:
      return state;
  }
};

type AddPostActionCreatorType = {
  type: typeof ADD_POST
  newPostText: string
}
export const addPost = (newPostText: string): AddPostActionCreatorType => ({ type: ADD_POST, newPostText });

type SetUserProfileActionType = {
  type: typeof SET_USER_PROFILE
  profile: ProfileType
}
export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({ type: SET_USER_PROFILE, profile });

type SetStatusActionType = {
  type: typeof SET_STATUS
  status: string
}
export const setStatus = (status: string): SetStatusActionType => ({ type: SET_STATUS, status}) 

export const getUserProfile = (userId: number) => async (dispatch: any) => {
  let response = await usersAPI.getProfile(userId);
  dispatch(setUserProfile(response.data));
};

export const getStatus = (userId: number) => async (dispatch: any) => {
  try {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
  } catch(error) {
    //
  }
};

export const updateStatus = (status: string) => async (dispatch: any) => {
  let response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
}; 

export default profileReducer;
