// src/features/todoSlice.js
import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todos',
    initialState:JSON.parse(localStorage.getItem('todos')) || [],
    reducers: {
        addTodo: (state, action) => {
            const newTodo = { id: Date.now(), text: action.payload, completed: false };
            state.push(newTodo);

            const updatedData = [...state];
            localStorage.setItem('todos', JSON.stringify(updatedData));
        },
        toggleTodo: (state, action) => {
            const todo = state.find(todo => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        removeTodo: (state, action) => {
            const index = state.findIndex(todo => todo.id === action.payload);
            if (index !== -1) {
                state.splice(index, 1);
    
                const updatedData = [...state];
                localStorage.setItem('todos', JSON.stringify(updatedData));
            }
        },
    },
   
},
);

export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
