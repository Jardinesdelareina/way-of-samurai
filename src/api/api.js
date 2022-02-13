import axios from "axios";

const instanse = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "2bde2a1d-0676-4f50-ae12-8fc07307f70b"
    },
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instanse.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    },
    follow(userId) {
        return instanse.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instanse.delete(`follow/${userId}`)
    }
}

