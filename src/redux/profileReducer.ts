import { FormAction } from 'redux-form'

import { profileAPI } from '../api/profileApi'
import { MyPostType, ProfileType } from '../types/types'
import { BaseThunkType, InferActionsTypes } from './reduxStore'

const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
  myPost: [
    {id: 1, message: "Hi! How are you?"},
    {id: 2, message: "Todo esta bien!!!"},
    {id: 3, message: "Lorem, ipsum"},
  ] as Array<MyPostType>,
  profile: null as ProfileType | null,
  status: "",
}

export type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes | FormAction>

let profileReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = { id: 4, message: action.newPostText }
      return {
        ...state,
        myPost: [...state.myPost, newPost]
      }
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      }
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status
      }
    }
    default:
      return state
  }
}

export const actions = {
  addPost: (newPostText: string) => ({type: 'ADD_POST', newPostText} as const),
  setUserProfile: (profile: ProfileType) => ({type: 'SET_USER_PROFILE', profile} as const),
  setStatus: (status: string) => ({type: 'SET_STATUS', status} as const),
}

export const getUserProfile = (userId: number): ThunkType => async (dispatch) => {
  let response = await profileAPI.getProfile(userId)
  dispatch(actions.setUserProfile(response))
}

export const getStatus = (userId: number): ThunkType => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(actions.setStatus(response))
}

export const updateStatus = (status: string): ThunkType => async (dispatch) => {
  try {
    let response = await profileAPI.updateStatus(status)
    if (response.resultCode === 0) {
      dispatch(actions.setStatus(status))
    }
  } catch (error) {
    //
  }
}

export default profileReducer;
