const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";

let initialState = {
    users: [
        { id: 1, followed: true, name: "Костюк А.", location: { country: "Россия", city: "Архангельск" } },
        { id: 2, followed: false, name: "Сергеев Б.", location: { country: "Мексика", city: "Мехико" } },
        { id: 3, followed: false, name: "Алексеева А.", location: { country: "США", city: "Детроит" } },
        { id: 4, followed: false, name: "Лаврова В.", location: { country: "Россия", city: "Москва" } },
        { id: 5, followed: true, name: "Боев А.", location: { country: "Россия", city: "Уфа" } },
        {id: 6, followed: false, name: "Алиева А.", location: { country: "Украина", city: "Киев" } },
    ]
};

let usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            };
        case SET_USERS:
            return {
                ...state, users: [...state.users, ...action.users]
            }
        default:
            return state;
    }
};

export const followActionCreator = (userId) => ({ type: FOLLOW, userId });
export const unfollowActionCreator = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersActionCreator = (users) => ({ type: SET_USERS, users });

export default usersReducer;
