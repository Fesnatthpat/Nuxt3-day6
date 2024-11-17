
import { type Post } from '~~/types/post'


export default () => {
    // const POST_URL = 'http://localhost:3000/api'

    const config = useRuntimeConfig()

    const POST_URL = config.public.postsUrlAPI

    // console.log('POST_URL',POST_URL)
    


    const get = async <T>(endpoint: string) => {
        return useFetch<T>(`${POST_URL}${endpoint}`)
    }

    // Get All Posts
    const getPosts = async () => {
        return get<Post[]>('/posts')  // ใช้ /posts endpoint เพื่อดึงข้อมูลโพสต์ทั้งหมด
    }
    // const getUsers = async () => {
    //     return get<Post[]>('/users')  // ใช้ /user endpoint เพื่อดึงข้อมูลUsersทั้งหมด
    // }

    return {
        getPosts,
        // getUsers
    }
}
