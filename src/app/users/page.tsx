import {IUser} from "@/models/IUser";


const usersPage = async () => {
    const users: IUser[] = await fetch('http://localhost:3000/users/api').then((res) => res.json());

    return (
        <>
            {users.map((user) => (<div key={user.id}>{user.name}</div>))}
        </>
    );
};
export default usersPage;