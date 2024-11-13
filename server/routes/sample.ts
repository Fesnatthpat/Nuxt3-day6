// Get: http://localhost:3000/api/sample

export default defineEventHandler((event) => {
    if(event.context.auth.role !== 'admin') {
        throw createError(
            {
                statusCode: 403,
                message: 'Unauthorized'
            }
        )
    }

    return {
        message: `Welcom user ${event.context.auth.user}`
    }
    // return {
    //     name: 'Sample API from 4444 server/api/sample.ts'
    // }
})