import './TodoList.css';
import TodoItem from './TodoItem';
import {type Todo} from '../App';
import { useState, useMemo, useContext } from 'react';
import { TodoStateContext } from '../TodoContext';

// useContext 적용 전 
// interface TodoListProps {
//   todos: Todo[];
//   onUpdate:(targetId: number) => void;
//   onDelete:(targetId: number) => void;
// }

//function TodoList({ todos, onUpdate, onDelete }: TodoListProps) {

// useContext 적용 후
function TodoList() {
    // todos, onUpdate, onDelete 룰 TodoContext 에서 받아온다.
    const {todos} = useContext(TodoStateContext);
    const [search, setSearch] = useState<string>('');

    const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const getSearchResult = () => {
        // console.log('getSearchResult 함수 호출.');
        return search === '' 
            ? todos 
            : todos.filter((todo) => todo.content.toLowerCase().includes(search.toLowerCase()));
    };

    // useMemo 사용 전
    // const analyzeTodo = () => {
    //     console.log('analyzeTodo 함수 호출.');
    //     const totalCount = todos.length;
    //     const doneCount = todos.filter((todo) => todo.isDone).length;
    //     const notDoneCount = totalCount - doneCount;
    //     return { totalCount, doneCount, notDoneCount };
    // }

    // const { totalCount, doneCount, notDoneCount } = analyzeTodo();

    // useMemo 사용 후 start // todos 값이 변경될때만 실행 
    const analyzeTodo = useMemo(() => {
        console.log('analyzeTodo 함수 호출.');
        const totalCount = todos.length;
        const doneCount = todos.filter((todo) => todo.isDone).length;
        const notDoneCount = totalCount - doneCount;
        return { totalCount, doneCount, notDoneCount };
    }, [todos]);

    const { totalCount, doneCount, notDoneCount } = analyzeTodo;
    // useMemo 사용 후 end

    return(
        <div className="TodoList">
            <h4>Todo List</h4>
            <div>
                <div>총갯수: {totalCount}</div>
                <div>완료된 할일: {doneCount}</div>
                <div>아직 완료하지 못한 할일: {notDoneCount}</div>
            </div>
            <input 
                type="text" 
                className="searchbar" 
                placeholder="검색어를 입력하세요"
                // value={search}
                onChange={onChangeSearch}
            />
            <div>
                { 
                    getSearchResult().map((todo) => (
                        // <TodoItem todo={todo} key={todo.id} onUpdate={onUpdate} onDelete={onDelete}/>
                        <TodoItem todo={todo} key={todo.id} />
                    ))
                }
            </div>
        </div>
    );
}

export default TodoList;