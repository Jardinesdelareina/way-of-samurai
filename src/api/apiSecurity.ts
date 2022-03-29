import { instance } from './api'

type GetCaptchaUrlResponseType = {
    url: string
}

export const securityAPI = {
    async getCaptchaUrl() {
        const res = await instance.get<GetCaptchaUrlResponseType>(`security/get-captcha-url`)
        return res.data // Получить капчу
    }
}