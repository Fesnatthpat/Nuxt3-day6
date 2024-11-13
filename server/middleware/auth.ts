export default defineEventHandler((event) => {
    event.context.auth = {
        user: 'fes',
        role: 'admin',
        permissions: ['read', 'write']
    }

    // console.log(event.context.auth)
})