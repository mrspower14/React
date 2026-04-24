import type {Book} from "../types/book.ts";
import "./Library.css";

interface LibraryProps {
    book : Book;
}

function Library({book}:LibraryProps) {
    const {title, author, image} = book;
    return (
        <div className="photo-card">
            <img src={image} alt={title} className="photo"/>
            <h2 className="title">{title}</h2>
            <p className="author">{author}</p>
        </div>
    );
}

export default Library;