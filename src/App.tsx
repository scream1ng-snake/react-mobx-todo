import React, { useState } from 'react';
import TodoFilter from './components/todoFilter';
import NavBar from './components/navbar';
import TodoForm from './components/todoForm';
import TodoList from './components/todoList';
import { IFilter } from './types/types';
import todo from "./store/todoStore";
import './styles/app.scss';

const App = () => {
  const [options] = useState<IFilter[]>([
    { value: 'all', name: 'Все задачи' },
    { value: 'completed', name: 'Завершенные задачи' },
    { value: 'uncompleted', name: 'Незавершенные задачи' },
  ])

  const addHandler = (title: string) => {
    const newTodo = {
      title,
      id: Date.now(),
      completed: false
    }
    todo.addTodo(newTodo)
  }

  const checkSelectedTodos = (filter: string) => {
    todo.filterTodo(filter)
  }

  return (
    <>
      <NavBar title='Todo List' />
      <TodoForm onAdd={addHandler} />
      <TodoFilter value={todo.selectedFilter} options={options} onChange={checkSelectedTodos}></TodoFilter>
      <TodoList />
    </>
  );
}

export default App;
