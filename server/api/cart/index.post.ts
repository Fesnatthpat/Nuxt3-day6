export default defineEventHandler((event) => {
    return {
        statusCode: 200,
        message: 'POST request to /api/cart'
    }
})