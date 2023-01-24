import { useState } from 'react';
import { RiTodoFill, RiDeleteBin2Line, RiCheckLine } from 'react-icons/ri';
import style from './Todo.module.css';

function Todo({ todo, deleteTodo, toggleTodo }) {
  return (
    !!todo && (
      <div
        className={`${style.todo} ${
          todo.isComplited ? style.completedTodo : ''
        }`}
      >
        <RiTodoFill className={style.todoIcon} />
        <div className={style.todoText}>{todo.text}</div>
        <RiDeleteBin2Line
          className={style.deleteIcon}
          onClick={() => deleteTodo(todo.id)}
        />
        <RiCheckLine
          className={style.checkIcon}
          onClick={() => toggleTodo(todo.id)}
        />
      </div>
    )
  );
}

export default Todo;
