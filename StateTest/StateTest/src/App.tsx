
import { useState } from 'react';
import './App.css'
import Counter from './component/Counter';
import ClassCounter from './component/ClassCounter';
import LiveInput from './component/LiveInput';


function App() {
  return (
    <>
      {/* <Counter init={1}  />
      
      <ClassCounter init={1}/> */}

      <LiveInput />
    </>
  )
}

export default App
