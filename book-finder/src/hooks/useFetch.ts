import type { ApiResponse } from '../types/Book';   
import { useEffect, useState } from 'react';

export default function useFetch<T>(
    query: string, 
    page: number, 
    url: string, 
    apiKey: string 
) {
    const [documents, setDocuments] = useState<T[]>([]);
    const [isEnd, setIsEnd] = useState<boolean>(false);

    useEffect(() => {
        if (!query) return;
        if (!page) return;

        //함수 정의
        const fetchBooks = async () => {
            try{
                const encodedQuery = encodeURIComponent(query); //한글 인코딩
                const endPoint = `${url}?query=${encodedQuery}&page=${page}`;
                const response = await fetch(endPoint, { headers: {Authorization: apiKey}});
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status} `);
                }

                const data: ApiResponse<T> = await response.json();

                setDocuments(data.documents);
                setIsEnd(data.meta.is_end);

                
            } catch (err) {
                console.error('검색중 오류', err);
            }
        }

        //함수 호출
        fetchBooks();

    }, [query, page, url, apiKey]);

    // 상태관리하는 항목 반환
    return {documents, isEnd};
}
