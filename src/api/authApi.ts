import { APIResponseType, instance, ResultCodesEnum } from "./api"

type MeResponceType = {
    id: number
    email: string
    login: string
}

type LoginResponseType = {
    userId: number
}

export const authAPI = {
    me() {
        return instance.get<APIResponseType<MeResponceType>>(`auth/me`).then(res => res.data)
    },
    login(email: string, password: string, rememberMe = false) {
        return instance.post<APIResponseType<LoginResponseType, ResultCodesEnum>>(`auth/login`, { email, password, rememberMe }).then(res => res.data)
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}