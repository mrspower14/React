import { useState } from 'react';
import { Child, ChildMemo } from './ChildMemo';

function ChildWithMemo() {

  const [count, setCount] = useState(0);
  const [text, setText] = useState("");;
  return (
    <>
      <div>
        <Child value={count}/>
        <ChildMemo value={count}/>
        <button onClick={() => setCount(count + 1)}>카운트 증가</button>
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </div> 
    </>
  )
}

export default ChildWithMemo