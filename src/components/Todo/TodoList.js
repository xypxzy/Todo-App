import Todo from './Todo';
import style from './TodoList.module.css';

function TodoList({ todos, deleteTodo, toggleTodo }) {
  return !todos.length ? ( //Или можно изпользовать !todo.length
    <h1>Todo list is empty</h1>
  ) : (
    <div className={style.todoListContainer}>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;
