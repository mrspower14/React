import Hello from "./Hello"

export default function Hi() {
    return (
        <div>
            <p>HI Component</p>
            <Hello/>

            <label htmlFor="title">이름</label>
            <input type="text" id="title"/>
        </div>
    )
}