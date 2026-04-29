import { Link } from "react-router-dom";

export function Header() {
    return(
        <>
        <Link to="/">
            <h1>헤더입니다.</h1> 
        </Link>
        </>
    );
}

export function Main() {
    return(
        <>
        <h3>안녕하세요. 메인페이지 입니다.</h3> 
        <Link to="/product/1">1번 상품</Link>
        <Link to="/product/2">2번 상품</Link>
        </>
    );
}

export function Product() {
    return(
        <>
        <h3>상품 페이지입니다.</h3> 
        </>
    );
}

export function NotFound() {
    return(
        <>
        <h1>404 Error</h1> 
        </>
    );
}



