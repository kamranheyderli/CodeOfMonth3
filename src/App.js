import React from 'react';
import Input  from "./components/Input";
import TodoList from "./components/TodoList";


function App() {
  return (
    <div className="container">
      <h1>To Do List</h1>
      <Input />
      <TodoList />
    </div>
  );
}

export default App;
