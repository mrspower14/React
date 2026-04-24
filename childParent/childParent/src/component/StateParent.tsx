import { useState } from "react";
import {StateCounter, ResetCounter} from "./StateCounter";

export default function StateParent() {
    const [count, setCount] = useState<number>(0);
    const update = (step: number) => setCount((c) => c + step);
    const reset = () => setCount(0)

    return (
        <div>
        <p>총 개수: {count}</p>
            <StateCounter onUpdate={update} step={1}/>
            <StateCounter onUpdate={update} step={5}/>
            <StateCounter onUpdate={update} step={-1}/>
            <ResetCounter onResetCount={reset} />
        </div>
    );
}