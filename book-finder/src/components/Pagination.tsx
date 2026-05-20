import { useRef } from 'react';
import './Pagination.css';
import type { Book } from '../types/Book.ts';

interface PaginationProps {
    page: number;
    isEnd: boolean;
    handlePrev: () => void;
    handleNext: () => void;
}

function Pagination({ page, isEnd, handlePrev, handleNext }: PaginationProps) {

    return (
        <div className="pagination">
            <button onClick={handlePrev} disabled={page === 1}>이전</button>
            <span>{page}</span>
            <button onClick={handleNext} disabled={isEnd}>다음</button>
        </div>

    );

}

export default Pagination;