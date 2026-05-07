import { createContext } from "react";
import type { Book } from '../types/Book.ts';


type BookContextType = {
    selectBook: (book:Book) => void;
}

const BookContext = createContext<BookContextType | null>(null);
BookContext.displayName = "BookContext";

export default BookContext;
