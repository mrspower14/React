import './App.css'
import { Child, ChildMemo } from './component/ChildMemo';
import ChildWithMemo from './component/ChildWithMemo';
import EventBasic from './component/EventBasic';
//import Hello from './component/Hello'; // 엔터치면 자동 경로 만들어준다.
//import Hi from "./component/Hi"
//import Welcome from './component/Welcome';
//import PropsTest from "./component/PropsTest";
//import SayHello from "./component/SayHello";
//import Library from './component/Library';
//import LoginControl from './component/LoginControl';
//import CardList from './component/CardList';
import StateForm from './component/StateForm';
import StateFromUC from './component/StateFormUC';
import { useState } from 'react';

function App() {

  // const [count, setCount] = useState(0);
  // const [text, setText] = useState("");;
  return (
    <>
      {/* <EventBasic type="date"/>
      <EventBasic type="time"/>
      <EventBasic type="all"/> */}
      {/* <LoginControl/> */}
      {/* <CardList /> */}
      {/* <StateForm />
      <StateFromUC /> */}

      {/* <div>
        <Child value={count}/>
        <ChildMemo value={count}/>
        <button onClick={() => setCount(count + 1)}>카운트 증가</button>
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </div>  */}
      <ChildWithMemo />
    </>
  )
}

export default App
