// GET: http://localhost:3000/api/posts
import {PrismaClient} from "@prisma/client"

// Intance of PrismaClient
const prisma = new PrismaClient()

export default defineEventHandler(async(event) => {

    // รับ title จาก query string
    const query = getQuery(event)
    const title = query.title as string

    // Fetch all posts
    const posts = await prisma.post.findMany({

        where: {
            title: {
                contains: title, // ใช้ "Contains" เพื่อค้าหาที่มีคำใน title
                mode: 'insensitive' // ไม่สนใจตัวพิมพ์เล็กหรือใหญ่
            }
        },

        select: {
            id: true,
            title: true,
            content: true,
            published: true,
            createdAt: true,
            author: {
                select: {
                    name: true,
                }
            }
        },
        orderBy: {
            id: 'desc' // เรียงลำดับจากมากไปน้อย
        }
    })

    return posts
})