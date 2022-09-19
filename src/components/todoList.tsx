import { observer } from 'mobx-react-lite';
import React, { FC, useMemo } from 'react';
import todoStore from '../store/todoStore';

const TodoList: FC = observer(() => {
  const { todos, selectedFilter } = todoStore
  
  const removeTodo = (id: number) => {
    const shouldRemove = window.confirm('Вы точно хотите удалить эту задачу')
    shouldRemove && todoStore.removeTodo(id)
  }

  const removeHandler = (id: number, event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    removeTodo(id)
  }

  const filteredTodos = useMemo(() => {
    switch (selectedFilter) {
      case 'completed':
        return [...todos.filter(todo => todo.completed)];
      case 'uncompleted':
        return [...todos.filter(todo => !todo.completed)];
      default:
        return [...todos]
    }
  }, [todos, selectedFilter])

  return (
    <div className="wrapper">
      <ul className="todo-list">
        {filteredTodos.length
          ? filteredTodos.map((t) => {
            return (
              <li key={t.id} className={`todo ${t.completed && 'completed'}`}>
                <input type="checkbox" checked={t.completed} onChange={() => todoStore.completeTodo(t.id)} />
                <span>{t.title}</span>
                <button className='todo-delete' onClick={event => removeHandler(t.id, event)}>Удалить</button>
              </li>
            )
          })
          : <h5>Список задач пуст</h5>
        }
      </ul>
    </div>
  );
})

export default TodoList;