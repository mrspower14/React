import './App.css'
import { useReducer, useRef, useState } from 'react';
import Header from './components/Header';
import TodoEditor from './components/TodoEditor';
import TodoList from './components/TodoList';
 
//mockup data 
const mockTodos = [
   {
    id: 0,
    isDone: false,
    content: "Javascript 공부하기",
    createDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "AI 공부하기",
    createDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "React 공부하기",
    createDate: new Date().getTime(),
  }
]

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
    switch (action.type) {
        case 'CREATE': {
            return [action.newItem, ...todos];
        }
        case 'UPDATE': {
            return todos.map((todo) => 
                todo.id === action.targetId ? { ...todo, isDone: !todo.isDone } : todo
            );
        }
        case 'DELETE': {
            return todos.filter((todo) => todo.id !== action.targetId);
        }
        default:
            return todos;
    }
}

//############## useReducer로 리팩토링 end##############


function App() {

  //useReducer로 리팩토링 되면 useState 는 필요 없다. 
  //const [todos, setTodos] = useState<Todo[]>(mockTodos);
  const [todos, dispatch] = useReducer(reducer, mockTodos);
  const idRef = useRef(3);

  const onCreate = (content: string) => {
    const newItem = {
      id: idRef.current,
      isDone: false,
      content,
      createDate: new Date().getTime(),
    }

    // useReducer로 리팩토링 되면 setTodos는 필요없다.
    // setTodos([newItem, ...todos]);
    dispatch({ type: 'CREATE', newItem});

    idRef.current += 1;
  }

  const onUpdate = (targetId: number) => {
    // useReducer로 리팩토링 되면 setTodos는 필요없다.
    // setTodos(
    //   todos.map((todo) => 
    //     todo.id === targetId ? {...todo, isDone: !todo.isDone} : todo 
    //   )
    // );
    dispatch({ type: 'UPDATE', targetId})
;  }

  const onDelete = (targetId: number) => {
      // useReducer로 리팩토링 되면 setTodos는 필요없다.
      // setTodos(todos.filter((todo) => todo.id !== targetId));
      dispatch({ type: 'DELETE', targetId});
  }


  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  )
}

export default App
