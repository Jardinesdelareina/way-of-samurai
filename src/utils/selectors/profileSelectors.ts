import { AppStateType } from './../../redux/reduxStore'

export const getProfile = (state: AppStateType) => {
    return state.profilePage.profile
}

export const getUserStatus = (state: AppStateType) => {
    return state.profilePage.status
}

export const getMyPost = (state: AppStateType) => {
    return state.profilePage.myPost
}