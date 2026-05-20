import './App.css'
import { useCallback, useReducer, useRef, useState, useMemo } from 'react';
import Header from './components/Header';
import TodoEditor from './components/TodoEditor';
import TodoList from './components/TodoList';
import { TodoStateContext, TodoDispatchContext } from './TodoContext';
 
// //mockup data 
// const mockTodos = [
//    {
//     id: 0,
//     isDone: false,
//     content: "Javascript 공부하기",
//     createDate: new Date().getTime(),
//   },
//   {
//     id: 1,
//     isDone: false,
//     content: "AI 공부하기",
//     createDate: new Date().getTime(),
//   },
//   {
//     id: 2,
//     isDone: false,
//     content: "React 공부하기",
//     createDate: new Date().getTime(),
//   }
// ]

//interface 선언
export interface Todo {
  id: number;
  isDone: boolean;
  content: string;
  createDate: number;
}

//############## useReducer로 리팩토링 start ##############

type Action = 
    | { type: 'CREATE'; newItem : Todo}  
    | { type: 'UPDATE'; targetId: number }
    | { type: 'DELETE'; targetId: number } ;

function reducer(todos: Todo[], action: Action): Todo[] {

  let result;
  switch (action.type) {
      case 'CREATE': {
          result = [action.newItem, ...todos];
          break;
      }
      case 'UPDATE': {
          result = todos.map((todo) => 
              todo.id === action.targetId ? { ...todo, isDone: !todo.isDone } : todo
          );
          break;
      }
      case 'DELETE': {
          result = todos.filter((todo) => todo.id !== action.targetId);
          break;
      }
      default:
          result = todos;
  }

  //브라우저에 저장
  localStorage.setItem('todos', JSON.stringify(result));

  return result;
}

//############## useReducer로 리팩토링 end##############


function App() {

  //useReducer로 리팩토링 되면 useState 는 필요 없다. 
  //const [todos, setTodos] = useState<Todo[]>(mockTodos);
  const stored = localStorage.getItem('todos');
  const initTodos: Todo[] = stored ? JSON.parse(stored) : [];

  // const [todos, dispatch] = useReducer(reducer, mockTodos);
  const [todos, dispatch] = useReducer(reducer, initTodos);
  // const initId = Number(localStorage.getItem('todoId') ?? 0);
  // const idRef = useRef(initId);

  
  const maxId = initTodos.reduce((max, obj) => {
    return obj.id > max ? obj.id : max;
  }, 0);
  const idRef = useRef(maxId + 1);

  const onCreate = useCallback((content: string) => {
    const newItem = {
      id: idRef.current,
      isDone: false,
      content,
      createDate: new Date().getTime(),
    };

    // useReducer로 리팩토링 되면 setTodos는 필요없다.
    // setTodos([newItem, ...todos]);
    dispatch({ type: 'CREATE', newItem});

    idRef.current += 1;
    localStorage.setItem('todoId', JSON.stringify(idRef.current));
  }, []);

  // useCallback으로 함수가 다시 생성되지 않도록 수정
  // TodoItem 컴포넌트 React.memo로 감싸줬기 때문에 onUpdate 함수도 useCallback으로 감싸줘야한다.)
  const onUpdate = useCallback((targetId: number) => {
    // useReducer로 리팩토링 되면 setTodos는 필요없다.
    // setTodos(
    //   todos.map((todo) => 
    //     todo.id === targetId ? {...todo, isDone: !todo.isDone} : todo 
    //   )
    // );
    dispatch({ type: 'UPDATE', targetId})
;  }, []);

  // useCallback으로 함수가 다시 생성되지 않도록 수정 
  // TodoItem 컴포넌트 React.memo로 감싸줬기 때문에 onDelete 함수도 useCallback으로 감싸줘야한다.)
  const onDelete = useCallback((targetId: number) => {
      // useReducer로 리팩토링 되면 setTodos는 필요없다.
      // setTodos(todos.filter((todo) => todo.id !== targetId));
      dispatch({ type: 'DELETE', targetId});
  }, []);

  const dispatches = useMemo( 
    () =>  ({onCreate, onUpdate, onDelete}
    ), [onCreate, onUpdate, onDelete]);

  return (
    <div className="App">
      <Header />
      <TodoStateContext.Provider value={{ todos }}>
        <TodoDispatchContext.Provider value={dispatches}>
            {/* TodoConext 적용시 TodoEditor, TodoList에서 TodoContext를 사용 */}
            {/* <TodoEditor onCreate={onCreate} />
            <TodoList todos={todos} onUpdate={onUpdate} onDelete={onDelete} /> */}
            <TodoEditor />
            <TodoList />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  )
}

export default App
