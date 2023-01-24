import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';
import Button from '../UI/Button';
import style from './TodoActions.module.css';

function TodoActions({ resetTodo, deleteComplitedTodo, completedTodosExist }) {
  return (
    <div className={style.todoActionContainer}>
      <Button title="Reset Todo" onClick={resetTodo}>
        <RiRefreshLine />
      </Button>
      <Button
        title="Clear Completed Todo"
        onClick={deleteComplitedTodo}
        disabled={!completedTodosExist}
      >
        <RiDeleteBin2Line />
      </Button>
    </div>
  );
}

export default TodoActions;
