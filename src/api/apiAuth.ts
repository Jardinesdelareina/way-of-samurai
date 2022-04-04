import { APIResponseType, instance, ResultCodeForCapcthaEnum, ResultCodesEnum } from './api'

type MeResponseType = {
    id: number
    email: string
    login: string
}
type LoginResponseType = {
    userId: number
    resultCode: ResultCodesEnum | ResultCodeForCapcthaEnum,
    messages: Array<string>
}

export const authAPI = {
    me() {
        return instance.get<APIResponseType<MeResponseType>>(`auth/me`) // Получить мои данные
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