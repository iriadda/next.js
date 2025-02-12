import {NextRequest, NextResponse} from "next/server";

export const middleware = (request: NextRequest) => {
    const login = request.cookies.get('login')
    const password = request.cookies.get('password')
    const token = fetch('http://localhost:3001/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            key1: login,
            key2: password,
        })
    })
    // const responce = NextResponse.next({
    //     headers:{
    //         Authorization: token
    //     }
    // })
    // return responce;
}
export const config = {
    matcher: '/auth'
}