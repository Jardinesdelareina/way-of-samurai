import { ProfileType } from "../types/types"
import { instance } from "./api"

export const profileAPI = {
    async getProfile(userId: number) {
        const res = await instance.get<ProfileType>(`profile/${userId}`)
        return res.data
    },
    async getStatus(userId: number) {
        const res = await instance.get<string>(`profile/status/${userId}`)
        return res.data;
    },
    async updateStatus(status: string) {
        const res = await instance.put(`profile/status`, { status: status })
        return res.data;
    }
}