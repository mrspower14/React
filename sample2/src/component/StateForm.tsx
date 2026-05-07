import { useState } from "react";

export default function StateForm() {
    const [form, setForm] = useState({
        name: "홍길동",     age: 18, });

    const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };
    
    const show = () => {
        console.log(`안녕하세요!! ${form.name} (${form.age}세) 님!`);
    }

    console.log("렌더링 중...StateForm");
    return (
        <form>
            <div>
                <label htmlFor="name">이름: </label>
                <input type="text" id="name" name="name" value={form.name} onChange={handleForm} /> 
            </div>
            <div>
                <label htmlFor="age">나이: </label>
                <input type="number" id="age" name="age" value={form.age} onChange={handleForm} />
            </div>
            <div>
                <button type="button" onClick={show}>보내기</button>
            </div>
            <p>안녕하세요, {form.name} ({form.age}세) 님!</p>
        </form>
    );
}