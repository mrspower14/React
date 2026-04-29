import { useState } from "react";

export function UseToggle(initial: boolean = false) {
    const [value, setValue] = useState<boolean>(initial);

    const toggle = () => {
        setValue((prev) => !prev);
    };

    return {value, toggle};
}