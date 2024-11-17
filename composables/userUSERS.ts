import { type User } from '~~/types/user'

export default () => {
    const config = useRuntimeConfig()

    const POST_URL = config.public.postsUrlAPI

    const get = async <T>(endpoint: string) => {
        return useFetch<T>(`${POST_URL}${endpoint}`)
    }

    // Get All Posts
    const getUsers = async () => {
        return get<User[]>('/users')  // ใช้ /users endpoint เพื่อดึงข้อมูลโพสต์ทั้งหมด
    }
    // console.log(getUsers)
    return {
        getUsers,
    }
}