export async function GET(request: Request, response: Response) {
    const users = await fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())

    response.headers.set('Content-Type', 'application/json');
    return Response.json(users);
}