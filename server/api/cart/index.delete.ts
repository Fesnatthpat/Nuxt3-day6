export default defineEventHandler((event) => {
    return {
        statusCode: 200,
        message: 'DELETE request to /api/cart'
    }
})