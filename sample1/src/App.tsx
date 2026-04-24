import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hello React</h1>
      <h2>Hi Hi Hi</h2>
      <p>안녕하세요.</p>
      <p>반갑습니다.</p>
    </>
  );
}

export default App;
