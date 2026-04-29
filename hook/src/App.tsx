import { useState } from 'react'
import CCounter from './component/CCounter';
import ExUseEffect from './component/ExUseEffect';
import UserList from './component/UserList1';
import Counter from './component/Counter1';
import Test1 from './component/Test1';
import './App.css'
import MovieInfo from './component/MovieInfo';
import ExUseMemo from './component/ExUseMemo';
import UseMemoTest from './component/UseMemoTest';
import ParentComponent from './component/UseCallbackTest';
import UserRefTest from './component/userRefTest';
import CountReducer from './component/CountReducer';
import Login from './component/Login';
import MainContent from './component/ThemeMainContext';
import DarkOrLight from './component/ThemeDarkOrLight';
import UseToggleTest from './component/UseToggleTest';
import UseFetchTest from './component/UseFetch';
import UseFetchMovies from './component/UseFetchMovieInfo';

function App() {

  return (
    <>
      {/* <CCounter count={0} /> */}
      {/* <ExUseEffect /> */}
      {/* <UserList /> */}
      {/* <Counter /> */}
      {/* <Test1 /> */}
      {/* <MovieInfo /> */}
      {/* <ExUseMemo num={2} /> */}
      <ParentComponent />
      {/* <UseMemoTest /> */}
      {/* <UserRefTest /> */}
      {/* <CountReducer /> */}
      {/* <Login /> */}
      {/* <DarkOrLight /> */}
      {/* <UseToggleTest /> */}
      {/* <UseFetchTest /> */}
      {/* <UseFetchMovies /> */}
    </>
  )
}

export default App
