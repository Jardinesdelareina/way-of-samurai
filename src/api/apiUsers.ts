import { APIResponseType, GetItemsType, instance } from './api'

// Данные с сервера забираются порциями. Названия могут меняться в зависимости от серверных разработчиков:
// count, take, limit и т.д.
export const usersAPI = {
    async getUsers(currentPage: number, pageSize: number) {
        // Дай мне такую-то страницу и столько-то элементов на ней
        const response = await instance.get<GetItemsType>(`users?page=${currentPage}&count=${pageSize}`)
        return response.data
    },
    async follow(userId: number) {
        const res = await instance.post<APIResponseType>(`follow/${userId}`)
        return res.data // Создать follow
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`).then(res => res.data) as Promise<APIResponseType> // Удалить follow
    }
}