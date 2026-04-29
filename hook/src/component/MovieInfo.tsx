import {useEffect, useState} from 'react';

interface Movie {
    id: number;
    title: string;
    poster: string;
}

interface MoviesResponse {
    movies: Movie[];
    count: number;
}

export default function MovieInfo() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [error, setError] = useState<string | null>(null);

    //useEffect 시작
    useEffect( () => {
        const load = async () => {
            try{
                const res = await fetch('https://raw.githubusercontent.com/wizard113/ML-Basic/main/movie.json');
                if (!res.ok) {
                    throw new Error('요청 실패');
                }
                 
                const data: MoviesResponse = await res.json();
                setMovies(data.movies);

                console.log(data);
            } catch(err) {
                if (err instanceof Error) {setError(err.message);}
            }
        };

        load();

    }, []); //한번만 실행
    //useEffect 종료

    if (error) return <p>{error}</p>;

    return (
        <div style={container}> 
            {movies.map((movie) => (
                <div style={card} key={movie.id}>
                    <img src={movie.poster} alt={movie.title} style={image} />
                    <div style={title}>{movie.title}</div>
                </div>
            ))}
        </div>
    );

}

const container: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh'
}

const card: React.CSSProperties = {
    width: '200px',
    height: '400px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: "7px 10px 21px 3px rgba(0,0,0,0.75)",
}

const image: React.CSSProperties = {
    width: '100%',
    height: '90%',
    objectFit: 'cover',
}

const title: React.CSSProperties = {
    height: '10%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    padding: '5px',
}
