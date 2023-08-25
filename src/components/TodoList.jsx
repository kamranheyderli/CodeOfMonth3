import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTodo, removeTodo } from '../redux/root/todoSlice';
import { MdDeleteOutline } from "react-icons/md";
import { AiOutlineCheck } from "react-icons/ai";

const TodoList = () => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);

    useEffect(() => {
        const storedTodos = localStorage.getItem('todos');
        if (storedTodos) {
            dispatch({ type: 'todos/setTodos', payload: JSON.parse(storedTodos) });
        }
    }, [dispatch]);


    const handleToggleTodo = id => {
        dispatch(toggleTodo(id));
    };

    const handleRemoveTodo = id => {
        dispatch(removeTodo(id));
    };

    return (
        <ul className='todolist'>
            {todos.map(todo => (
                <li
                    key={todo.id}
                    style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                >
                    {todo.text}
                    <div className="button_group">
                        <AiOutlineCheck className='check' onClick={() => handleToggleTodo(todo.id)} />
                        <MdDeleteOutline className='delete' onClick={() => handleRemoveTodo(todo.id)} />
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
