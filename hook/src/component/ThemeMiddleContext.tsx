import MainContext from "./ThemeMainContext";

export default function MiddleContext() {
    return (
        <div style={{backgroundColor: 'gray', padding: '20px'}}>
            <h1>이것은 Middle입니다.</h1>
            <MainContext />
        </div>
    );
}