import { useEffect, useState } from "react";

export function UseFetch<T>(url: string) {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const load = async() => {
            try {
                const res = await fetch(url);
                const json = await res.json();
    
                setData(json);
                setLoading(false);
            } catch (e) {
                console.log('오류 발생');
            }
        };

        load();
    }, [url]);

    return {data, loading};
}

type Movie = {
    id: number;
    title: string;
};

export default function UseFetchTest() {
    const {data, loading} = UseFetch<{movies: Movie[]}>('https://raw.githubusercontent.com/wizard113/ML-Basic/main/movie.json');
    if (loading) return <p>loading ... </p>

    return (
        <ul>
            {data?.movies.map((m) => (
                <li key={m.id}>{m.title}</li>
            ))}
        </ul>
    );    
}