import { profileAPI, usersAPI } from './../api/api'

const ADD_POST = 'ADD_POST'
const DELETE_POST = 'DELETE_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const SAVE_USER_PHOTO = 'SAVE_USER_PHOTO'

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
  status: "",
  newPostText: "",
}

let profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let text = action.newPostText
      return {
        ...state,
        newPostText: "",
        myPost: [...state.myPost, { id: 4, message: text }]
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

export const addPost = (newPostText) => ({ type: ADD_POST, newPostText })
export const deletePost = (postId) => ({ type: DELETE_POST, postId })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })
export const saveUserPhoto = (photos) => ({ type: SAVE_USER_PHOTO, photos })

export const getUserProfile = (userId) => async (dispatch) => {
  let response = await usersAPI.getProfile(userId)
  dispatch(setUserProfile(response.data))
}

export const getStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId)
  dispatch(setStatus(response.data))
}

export const updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status)
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status))
  }
}

export const savePhoto = (file) => async (dispatch) => {
  let response = await profileAPI.savePhoto(file)
  if (response.data.resultCode === 0) {
    dispatch(saveUserPhoto(response.data.data.photos))
  }
}

export default profileReducer
