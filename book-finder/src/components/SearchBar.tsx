import { useRef } from 'react';
import './SearchBar.css';

interface SearchBarProps {
    onChangeQuery : (q:string) => void;
    resetPage: () => void;
}

function SearchBar({ onChangeQuery, resetPage }:SearchBarProps) {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSearchQuery = () => {
        if (!inputRef.current) return;

        onChangeQuery(inputRef.current.value);
        resetPage();
    }    

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.nativeEvent.isComposing) return;
        
        if (e.key === 'Enter') {
            handleSearchQuery();
        }
    }

    return(
        <div className="search-bar">
            <input type="text" placeholder="검색어를 입력하세요." ref={inputRef}  onKeyDown={onKeyDown}/>
            <button onClick={handleSearchQuery}>검색</button>
        </div>
    );
}

export default SearchBar;