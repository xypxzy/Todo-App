import Todo from './Todo';
import style from './TodoList.module.css';

function TodoList({ todos, deleteTodo }) {
  return todos.length === 0 ? ( //Или можно изпользовать !todo.length
    <h1>Todo list is empty</h1>
  ) : (
    <div className={style.todoListContainer}>
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} deleteTodo={deleteTodo} index={index} />
      ))}
    </div>
  );
}

export default TodoList;
