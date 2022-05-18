export const getAuthUserId = (state) => {
    return state.auth.id
}

export const getIsAuth = (state) => {
    return state.auth.isAuth
}

export const getLogin = (state) => {
    return state.auth.login
}

export const getCaptchaUrl = (state) => {
    return state.auth.captchaUrl
}