interface NavigationProps {
    index: number;
    onChangeIndex: (index:number) => void;
}

function Navigation({index, onChangeIndex}: NavigationProps) {
    const handleNext = () => onChangeIndex(index + 1);
    const handlePrev = () => onChangeIndex(index - 1);

    return (
        <div className="button-container">
            <button className="nav" onClick={handlePrev}>이전</button>
            <button className="nav" onClick={handleNext}>다음</button>
        </div>
    );
}

export default Navigation;