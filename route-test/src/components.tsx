import { Link, useLocation, useParams, useSearchParams } from "react-router-dom";

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

    const { id } = useParams();
    const [searchParams] = useSearchParams();
    const q = searchParams.get("q");
    const location = useLocation();

    return(
        <>
        <h1>{id}번 상품 페이지입니다.</h1>
        <p>검색어: q:{q}</p>
        <p>pathname: {location.pathname}</p>
        <p>search: {location.search}</p>
        <p>hash: {location.hash}</p>   
        {/* <h3>상품 페이지입니다.</h3>  */}
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



