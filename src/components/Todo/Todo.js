import { RiTodoFill } from 'react-icons/ri';
import style from './Todo.module.css';

function Todo({ todo, deleteTodo, index }) {
  return (
    !!todo && (
      <div className={style.todo} onDoubleClick={() => deleteTodo(index)}>
        <RiTodoFill className={style.todoIcon} />
        <div className={style.todoText}>{todo}</div>
      </div>
    )
  );
}

export default Todo;
