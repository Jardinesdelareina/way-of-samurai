import { UserType } from './../types/types';
import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../utils/objectHelpers";
import { AppStateType } from './reduxStore';
import { ThunkAction } from 'redux-thunk';
import { Dispatch } from 'redux';

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
};

type InitialStateType = typeof initialState

let usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
            };
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
            };
        case SET_USERS: {
            return { ...state, users: action.users }
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state;
    }
};

type ActionsTypes = FollowSuccessActionType | UnfollowSuccessActionType | SetUsersActionType
    | SetCurrentPageActionType | SetTotalUsersCountActionType | ToggleIsFetchingActionType


type FollowSuccessActionType = {type: typeof FOLLOW, userId: number}
export const followSuccess = (userId: number): FollowSuccessActionType => ({ type: FOLLOW, userId });

type UnfollowSuccessActionType = {type: typeof UNFOLLOW, userId: number}
export const unfollowSuccess = (userId: number): UnfollowSuccessActionType => ({ type: UNFOLLOW, userId });

type SetUsersActionType = {type: typeof SET_USERS, users: Array<UserType>}
export const setUsers = (users: Array<UserType>): SetUsersActionType => ({ type: SET_USERS, users });

type SetCurrentPageActionType = {type: typeof SET_CURRENT_PAGE, currentPage: number}
export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => ({ type: SET_CURRENT_PAGE, currentPage });

type SetTotalUsersCountActionType = {type: typeof SET_TOTAL_USERS_COUNT, totalUsersCount: number}
export const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountActionType => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount });

type ToggleIsFetchingActionType = {type: typeof TOGGLE_IS_FETCHING, isFetching: boolean}
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => ({ type: TOGGLE_IS_FETCHING, isFetching });


type GetStateType = () => AppStateType
type DispatchType = Dispatch<ActionsTypes>
type ThunckType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const requestUsers = (currentPage: number, pageSize: number): ThunckType => {
  return async (dispatch, getState) => {
    dispatch(setCurrentPage(currentPage));
    let data = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
  };
};

const _followUnfollowFlow = async (dispatch: DispatchType, userId: number, apiMethod: any, actionCreator: (userId: number) =>
    FollowSuccessActionType | UnfollowSuccessActionType) => {
    let response = await apiMethod(userId);
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
}

export const follow = (userId: number): ThunckType => {
    return async (dispatch) => {
        _followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess);
    }
};

export const unfollow = (userId: number): ThunckType => {
    return async (dispatch) => {
        _followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess);
    }
};

export default usersReducer;