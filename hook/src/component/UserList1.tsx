import {useEffect, useState} from 'react';

interface User {
    id: number;
    name: string;
    email: string;
}

export default function UserList() {
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState<string | null>(null);

    //useEffect 시작
    useEffect( () => {
        const load = async () => {
            try{
                const res = await fetch('https://jsonplaceholder.typicode.com/users');
                if (!res.ok) {
                    throw new Error('요청 실패');
                }

                const data: User[] = await res.json();
                setUsers(data);

            } catch(err) {
                if (err instanceof Error) {setError(err.message);}
            }
        };

        load();

    }, []); //한번만 실행
    //useEffect 종료

    if (error) return <p>{error}</p>;

    return (
        <div> 
            <h1> UserList async/await</h1>
            <ul>
                {users.map((user) => (
                    <li key = {user.id}>{user.name}({user.email})</li>
                ))}
            </ul>
        </div>
    );

}