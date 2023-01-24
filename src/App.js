import { useState } from 'react';

import TodoForm from './components/Todo/TodoForm';
import TodoList from './components/Todo/TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  function deleteTodoHandler(index) {
    setTodos(todos.filter((_, indx) => index !== indx));
  }

  function addTodoHandler(text) {
    setTodos([...todos, text]);
  }

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      <TodoList todos={todos} deleteTodo={deleteTodoHandler} />
    </div>
  );
}

export default App;
