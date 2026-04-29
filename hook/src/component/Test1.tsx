import { useEffect, useState } from "react";

export default function Test1() {
    const [time, setTime] = useState<number>(0);

    useEffect(() => {
        console.log('타이머 시작');
        const id = setInterval(() => {
            setTime((t) => t + 1);
        }, 1000);

        // cleanup
        // clearInterval()을 하지 않으면 1초의 간격이 일정하지 않다.
        return () => {
            console.log('타이머 정리');
            clearInterval(id);
        }
    }, [time]);
    
    return <h1>{time}초</h1>;
}