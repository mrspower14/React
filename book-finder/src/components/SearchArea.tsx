import { useEffect, useState  } from 'react';
import './SearchArea.css';
import type { Book, ApiResponse } from '../types/Book.ts';
import SearchBar from './SearchBar.tsx';
import BookList from './BookList.tsx';
import Pagination from './Pagination.tsx';
import useFetch from '../hooks/useFetch.ts';

function SearchArea() {
    // const [documents, setDocuments] = useState<Book[]>([]);
    // const [isEnd, setIsEnd] = useState<boolean>(false);
    const [query, setQuery] = useState<string>('');
    const [page, setPage] = useState<number>(1);

    const url = 'https://dapi.kakao.com/v3/search/book';
    const apiKey = import.meta.env.VITE_OPEN_BOOK_FINDER_KEY;
    const {documents, isEnd} = useFetch<Book>(query, page, url, apiKey);

    const onChangeQuery = (q:string) => {
        setQuery(q);
    };

    const resetPage= () => {
        setPage(1);
    }

    const onClickNext = () => {
        setPage((p) => p + 1);
    }

    const onClickPrev = () => { 
        setPage((p) => p - 1);
    }

    // useEffect(() => {
    //     if (!query) return;

    //     //함수 정의
    //     const fetchBooks = async () => {
    //         try{
    //             const encodedQuery = encodeURIComponent(query); //한글 인코딩
    //             const endPoint = `https://dapi.kakao.com/v3/search/book?query=${encodedQuery}&page=${page}`;
    //             const response = await fetch(endPoint, { headers: {Authorization: ${apiKey}}});
    //             if (!response.ok) {
    //                 throw new Error(`HTTP error! status: ${response.status} `);
    //             }

    //             const data: ApiResponse<Book> = await response.json();

    //             setDocuments(data.documents);
    //             setIsEnd(data.meta.is_end);

    //         } catch (err) {
    //             console.error('검색중 오류', err);
    //         }
    //     }

    //     //함수 호출
    //     fetchBooks();

    // }, [query, page]);

    return(
        <div className='search-area'>
            <SearchBar onChangeQuery={onChangeQuery} resetPage={resetPage}/>
            <BookList books={documents} />
            <Pagination handleNext={onClickNext} handlePrev={onClickPrev} page={page} isEnd={isEnd} />
        </div>
    );
}

export default SearchArea;