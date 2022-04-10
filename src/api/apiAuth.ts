import { APIResponseType, instance } from './api'

type MeResponseType = {
    id: number
    email: string
    login: string
}
type LoginResponseType = {
    userId: number
}

export const authAPI = {
    async me() {
        const res = await instance.get<APIResponseType<MeResponseType>>(`auth/me`)
        return res.data // Получить мои данные
    },
    async login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
        const res = await instance.post<APIResponseType<LoginResponseType>>(`auth/login`, {
            email, password, rememberMe, captcha
        })
        return res.data // Создать текущую сессию (авторизоваться по перечисленным данным)
    },
    logout() {
        return instance.delete(`auth/login`) // Удалить данные текущей сессии
    }
}