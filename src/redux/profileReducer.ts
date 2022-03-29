import { FormAction, stopSubmit } from 'redux-form'
import { profileAPI, usersAPI } from '../api/api'
import { PostType, ProfileType } from '../types/types'
import { BaseThunkType, InferActionsTypes } from './reduxStore'

const ADD_POST = 'ADD_POST'
const DELETE_POST = 'DELETE_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const SAVE_USER_PHOTO = 'SAVE_USER_PHOTO'

let initialState = {
  myPost: [
    {
      id: 1,
      message: "First post",
    },
  ] as Array<PostType>,
  status: "",
  profile: null as ProfileType | null,
}

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>

let profileReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case ADD_POST: {
      let text = action.newPostText
      return {
        ...state,
        myPost: [...state.myPost, { id: 2, message: text }],
      }
    }
    case DELETE_POST: {
      return {
        ...state,
        myPost: state.myPost.filter((p) => p.id !== action.postId)
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
    case SAVE_USER_PHOTO: {
      return {
        ...state,
        profile: {...state.profile, photos: action.photos}
      }
    }
    default:
      return state
  }
}
export const actions = {
  addPost: (newPostText: string) => ({ type: ADD_POST, newPostText } as const),
  deletePost: (postId: number) => ({ type: DELETE_POST, postId } as const),
  setUserProfile: (profile: ProfileType) => ({ type: SET_USER_PROFILE, profile } as const),
  setStatus: (status: string) => ({ type: SET_STATUS, status } as const),
  saveUserPhoto: (photos: string) => ({ type: SAVE_USER_PHOTO, photos } as const)
}

export const getUserProfile = (userId: number): ThunkType => async (dispatch) => {
  const response = await usersAPI.getProfile(userId)
  dispatch(actions.setUserProfile(response.data))
}

export const getStatus = (userId: number): ThunkType => async (dispatch) => {
  const response = await profileAPI.getStatus(userId)
  dispatch(actions.setStatus(response.data))
}

export const updateStatus = (status: string): ThunkType => async (dispatch) => {
  const response = await profileAPI.updateStatus(status)
  if (response.data.resultCode === 0) {
    dispatch(actions.setStatus(status))
  }
}

export const savePhoto = (file: File): ThunkType => async (dispatch) => {
  const response = await profileAPI.savePhoto(file)
  if (response.data.resultCode === 0) {
    dispatch(actions.saveUserPhoto(response.data.data.photos))
  }
}

export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
  const userId = getState().auth.userId
  const response = await profileAPI.saveProfile(profile)
  if (response.data.resultCode === 0) {
    dispatch(getUserProfile(userId))
  } else {
    dispatch(stopSubmit("userInfo", { _error: response.data.messages[0] }))
    return Promise.reject(response.data.messages[0])
  }
}

export default profileReducer