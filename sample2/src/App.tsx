import './App.css'
import EventBasic from './component/EventBasic';
//import Hello from './component/Hello'; // 엔터치면 자동 경로 만들어준다.
//import Hi from "./component/Hi"
//import Welcome from './component/Welcome';
//import PropsTest from "./component/PropsTest";
//import SayHello from "./component/SayHello";
//import Library from './component/Library';
import LoginControl from './component/LoginControl';

function App() {

  return (
    <>
      {/* <EventBasic type="date"/>
      <EventBasic type="time"/>
      <EventBasic type="all"/> */}
      <LoginControl/>
    </>
  )
}

export default App
