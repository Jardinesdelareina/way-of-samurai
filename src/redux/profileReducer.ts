import { FormAction, stopSubmit } from 'redux-form'
import { profileAPI } from '../api/apiProfile'
import { PhotosType, PostType, ProfileType } from '../types/types'
import { BaseThunkType, InferActionsTypes } from './reduxStore'

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
    case 'ADD_POST': {
      let text = action.newPostText
      return {
        ...state,
        myPost: [...state.myPost, { id: 2, message: text }],
      }
    }
    case 'DELETE_POST': {
      return {
        ...state,
        myPost: state.myPost.filter((p) => p.id !== action.postId)
      }
    }
    case 'SET_USER_PROFILE': {
      return {
        ...state,
        profile: action.profile
      }
    }
    case 'SET_STATUS': {
      return {
        ...state,
        status: action.status
      }
    }
    case 'SAVE_USER_PHOTO': {
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos } as ProfileType
      }
    }
    default:
      return state
  }
}

export const actions = {
  addPost: (newPostText: string) => ({ type: 'ADD_POST', newPostText } as const),
  deletePost: (postId: number) => ({ type: 'DELETE_POST', postId } as const),
  setUserProfile: (profile: ProfileType) => ({ type: 'SET_USER_PROFILE', profile } as const),
  setStatus: (status: string) => ({ type: 'SET_STATUS', status } as const),
  saveUserPhoto: (photos: PhotosType) => ({ type: 'SAVE_USER_PHOTO', photos } as const)
}

export const getUserProfile = (userId: number): ThunkType => async (dispatch) => {
  const response = await profileAPI.getProfile(userId)
  dispatch(actions.setUserProfile(response))
}

export const getStatus = (userId: number): ThunkType => async (dispatch) => {
  const response = await profileAPI.getStatus(userId)
  dispatch(actions.setStatus(response))
}

export const updateStatus = (status: string): ThunkType => async (dispatch) => {
  const response = await profileAPI.updateStatus(status)
  if (response.resultCode === 0) {
    dispatch(actions.setStatus(status))
  }
}

export const savePhoto = (file: File): ThunkType => async (dispatch) => {
  const response = await profileAPI.savePhoto(file)
  if (response.resultCode === 0) {
    dispatch(actions.saveUserPhoto(response.data.photos))
  }
}

export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
  const userId = getState().auth.userId
  const response = await profileAPI.saveProfile(profile)
  if (response.resultCode === 0) {
    if (userId !== null) {
      dispatch(getUserProfile(userId))
    }
  } else {
    dispatch(stopSubmit("userInfo", { _error: response.messages[0] }))
    return Promise.reject(response.messages[0])
  }
}

export default profileReducer