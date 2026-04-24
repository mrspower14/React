import { useState } from "react";

interface CounterProps {
    init: number;
}

export default function Counter ({init}: CounterProps) {
    //let count = init;
    const [count, setCount] = useState<number>(init);

    const handleClick = () => {
        //count += 1;
        //setCount(count + 1);
        //setCount(count + 1);

        setCount((prev) => prev + 1);
        //setCount((prev) => prev + 1);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>클릭 카운터 Function</h1>
            <p>현재 클릭 수: {count}</p>
            <button onClick={handleClick}>클릭하세요</button>
        </div>
    )
}