import {useEffect, useState} from 'react';

export  default function ExUseEffect() {
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        document.title = `${count}번 클릭했습니다.`;
        console.log(count);
    }, [count]);    //의존성 배열, []의 값이 변경되었을때 useEffect가 실행되어야 하는 변수들
                    //[] 빈배열일 경우 최초 한번만 실행
                    //생략하면 렌더링될때마다 실행 

    return (
        <div>
            <p>{count} 번 클릭했습니다.</p>
            <button onClick={() => setCount((prev) => prev + 1)}>클릭</button>
            <button onClick={() => setCount(count)}>{count} 클릭</button>
        </div>
    );
}