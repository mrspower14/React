type props = {type: 'date' | 'time' | 'all'};

const current = (type: props['type']) => {
    const d = new Date();
    switch(type) {
        case 'date':
            console.log(d.toLocaleDateString());
            break;
        case 'time':
            console.log(d.toLocaleTimeString());
            break;
        case 'all':
            console.log(d.toString());
    }
}

export default function EventBasic({type}: props) {
    return (
        <div>
            <button onClick={() => current(type)}>
                현재 시각 가져오기
            </button>
        </div>
    );
}