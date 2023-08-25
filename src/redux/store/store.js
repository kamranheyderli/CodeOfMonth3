import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../root/todoSlice';

export default configureStore({
    reducer: {
        todos: todoReducer,
    },
});