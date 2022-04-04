import axios from 'axios'
import { UserType } from './../types/types'

/* 
REST API - инструкция(рекомендация) по использованию http - протокола для взаимодействия
фронтенда с сервером

get (get) - получение
post (create) - создание
put (update) - изменение
delete (delete) - удаление 
*/

export const instance = axios.create({
    withCredentials: true,          // true позволяет cookie сохранять данные в памяти
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "db736b46-6ab4-4844-bc15-2bc17b090fbe"
    }
})

export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
}

export enum ResultCodeForCapcthaEnum {
    CaptchaIsRequired = 10
}

export type GetItemsType = {
    items: Array<UserType>
    totalCount: number
    error: string | null
}

export type APIResponseType<D = {}, RC = ResultCodesEnum> = {
    data: D
    messages: Array<string>
    resultCode: RC
}