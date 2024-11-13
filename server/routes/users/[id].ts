export default defineEventHandler((event) => {
    
    // รับ parameter ที่ส่งมาจาก Clinet
    // http://localhost:3000/users/Natthpat
    const id = getRouterParam(event, 'id')

    // รับ query string ที่ส่งมาจาก Clinet
    //http://localhost:3000/users/Natthpat?type=admin&page=1
    const query = getQuery(event)

    return {
        id: id,
        query: {a: query.type, b: query.page},
        name: 'User API from server/routes/users/[id].ts'
    }
})