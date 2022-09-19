import React, { FC } from 'react';

interface IProps {
  onAdd(title: string): void;
}

const TodoForm: FC<IProps> = ({ onAdd }) => {
  const ref = React.useRef<HTMLInputElement>(null)

  const handleClickAdd = () => {
    ref.current!.value !== '' ? onAdd(ref.current!.value) : alert('Вы ничего не ввели')
    ref.current!.value = ''
  }

  return (
    <div className="todo-form">
      <h4>Добавьте задачу в список</h4>
      <div className="todo-form-add">
        <input ref={ref} placeholder="Введите текст задачи" type="text" className='todo-add-input'/>
        <button onClick={handleClickAdd} className="todo-add-button" type="submit" name="action">
          <a>Добавить</a>
        </button>
      </div>
    </div>
  );
}

export default TodoForm;