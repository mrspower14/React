import React from "react";

export function Child({value}: {value: number}) {
    console.log("렌더링 중...Child");
    return (
        <div>
            {value}
        </div>
    )
}

export const ChildMemo = React.memo(function ChildWMemo({value}: {value: number}) {
    console.log("렌더링 중...ChildMemo");
    return (
        <div>
            {value}
        </div>
    )
});

// export function ChildWithMemo({value}: {value: number}) {
//     console.log("렌더링 중...ChildMemo");
//     return (
//         <div>
//             {value}
//         </div>
//     )
// }

