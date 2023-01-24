import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import TodoForm from './components/Todo/TodoForm';
import TodoList from './components/Todo/TodoList';
import TodoActions from './components/Todo/TodoActions';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  function deleteTodoHandler(id) {
    setTodos(todos.filter((todo) => id !== todo.id));
  }

  function addTodoHandler(text) {
    const newTodo = {
      text,
      isComplited: false,
      id: uuidv4()
    };
    if (!(text === '' || text === null || text === undefined)) {
      setTodos([...todos, newTodo]);
    }
  }

  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) =>
        id === todo.id
          ? { ...todo, isComplited: !todo.isComplited }
          : { ...todo }
      )
    );
  };

  const resetTodoHandler = () => {
    setTodos([]);
  };
  const deleteComplitedTodoHandler = () => {
    setTodos(todos.filter((todo) => !todo.isComplited));
  };

  const complitedTodosCount = todos.filter((todo) => todo.isComplited).length;

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      {todos.length ? (
        <TodoActions
          completedTodosExist={!!complitedTodosCount}
          resetTodo={resetTodoHandler}
          deleteComplitedTodo={deleteComplitedTodoHandler}
        />
      ) : (
        <></>
      )}
      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHandler}
      />
      {!!complitedTodosCount && <h3>You done {complitedTodosCount} todos</h3>}
    </div>
  );
}

export default App;
