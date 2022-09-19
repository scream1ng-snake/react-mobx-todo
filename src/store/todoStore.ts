import { ITodo } from './../types/types';
import { makeAutoObservable } from "mobx"

class TodoStore {
  todos: ITodo[] = []
  selectedFilter: string = 'all'

  constructor() {
    this.todos = JSON.parse(localStorage.getItem("todos") || "[]")
    makeAutoObservable(this)
  }

  addTodo(todo: ITodo) {
    this.todos = [todo, ...this.todos]
    this.saveTodos()
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id)
    this.saveTodos()
  }

  completeTodo(id: number) {
    this.todos = this.todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
    this.saveTodos()
  }

  filterTodo(filter: string) {
    this.selectedFilter = filter
  }

  saveTodos() {
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }
}

export default new TodoStore()