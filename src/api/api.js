import axios from 'axios'

/* 
REST API - инструкция(рекомендация) по использованию http - протокола для взаимодействия
фронтенда с сервером

get (get) - получение
post (create) - создание
put (update) - изменение
delete (delete) - удаление 
*/

const instance = axios.create({
    withCredentials: true,          // true позволяет cookie сохранять данные в памяти
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "db736b46-6ab4-4844-bc15-2bc17b090fbe"
    },
})

// Данные с сервера забираются порциями. Названия могут меняться в зависимости от серверных разработчиков:
// count, take, limit и т.д.
export const usersAPI = {
    async getUsers(currentPage, pageSize) {
        // Дай мне такую-то страницу и столько-то элементов на ней
        const response = await instance.get(`users?page=${currentPage}&count=${pageSize}`)
        return response.data
    },
    follow(userId) {
        return instance.post(`follow/${userId}`) // Создать follow
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`) // удалить follow
    },
    getProfile(userId) {
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`) // Получить профайл с таким-то id
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`) // Получить статус юзера с таким-то id
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status: status }) // Изменить статус
    },
    savePhoto(photoFile) {
        const formData = new FormData()
        formData.append("image", photoFile)
        return instance.put(`profile/photo`, formData, { // Изменить фото у профайла без id (у авторизованного)
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile) {
        return instance.put(`profile`, profile) // Изменить (сохранить изменения) профайл
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`) // Получить мои данные
    },
    login(email, password, rememberMe = false, captcha = null) {
        return instance.post(`auth/login`, { email, password, rememberMe, captcha }) // Создать текущую сессию (авторизоваться по перечисленным данным)
    },
    logout() {
        return instance.delete(`auth/login`) // Удалить данные текущей сессии
    }
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`) // Получить капчу
    }
}