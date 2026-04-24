interface StateCounterProps {
    step: number;
    onUpdate: (val: number) => void;
}

interface ResetCounterProps {
    onResetCount: () => void;
}

function StateCounter({step, onUpdate}: StateCounterProps) {
    const handleClick = () => onUpdate(step);
    return (
        <button className="cnt" onClick={handleClick}>
            <span>{step}</span>
        </button>
    );
}

function ResetCounter({onResetCount}: ResetCounterProps) {
    return (
        <button onClick={onResetCount}>Reset</button>
    );
}

export {StateCounter, ResetCounter};