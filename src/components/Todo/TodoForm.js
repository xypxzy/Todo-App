import { useState } from 'react';
import style from './TodoForm.module.css';

function TodoForm({ addTodo }) {
  const [text, setText] = useState('');
  function onSubmitHandler(event) {
    event.preventDefault();
    addTodo(text);
    setText('');
  }
  return (
    <div className={style.todoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          placeholder="Enter new todo"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default TodoForm;
