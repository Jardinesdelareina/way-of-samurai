import { PhotosType, ProfileType } from '../types/types'
import { APIResponseType, instance } from './api'

type SavePhotoResponseType = {
    photos: PhotosType
}

export const profileAPI = {
    async getProfile(userId: number) {
        const res = await instance.get<ProfileType>(`profile/${userId}`)
        return res.data // Получить профайл с таким-то id
    },
    async getStatus(userId: number) {
        const res = await instance.get<string>(`profile/status/${userId}`)
        return res.data // Получить статус юзера с таким-то id
    },
    async updateStatus(status: string) {
        const res = await instance.put<APIResponseType>(`profile/status`, { status: status })
        return res.data // Изменить статус
    },
    async savePhoto(photoFile: File) {
        const formData = new FormData()
        formData.append("image", photoFile)
        const res = await instance.put<APIResponseType<SavePhotoResponseType>>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        return res.data
    },
    async saveProfile(profile: ProfileType) {
        const res = await instance.put<APIResponseType>(`profile`, profile)
        return res.data // Изменить (сохранить изменения) профайл
    }
}