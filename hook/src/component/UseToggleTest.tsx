import { UseToggle } from "./UseToggle";

export default function UseToggleTest() {
    const {value, toggle} = UseToggle();

    return (
        <div>
            <p>{value ? "ON" : "OFF"}</p>
            <button onClick={toggle}>toggle</button>
        </div>
    );

}