import { FormEvent, useState } from 'react';
import { TodoItem } from '../TodoItem';

import './styles.scss';

type Todo = {
  name: string;
  done: boolean;
}

export function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [name, setName] = useState('');

  function removeTodoItem(todoIndex: number) {
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);

    setTodos(newTodos);
  }

  function markTodoAsDone(todoIndex: number) {
    const newTodos = [...todos];
    newTodos[todoIndex].done = true;

    setTodos(newTodos);
  }

  function markTodoAsUnDone(todoIndex: number) {
    const newTodos = [...todos];
    newTodos[todoIndex].done = false;

    setTodos(newTodos);
  }

  function handleAddActivityFormSubmit(event: FormEvent) {
    event.preventDefault();

    if (name.trim() === '') {
      return;
    }

    setTodos(prevTodos => [...prevTodos, {name, done: false}]);
    setName('');
  }

  return (
    <section className="container">
      <h1>Todo App</h1>
      <form onSubmit={handleAddActivityFormSubmit}>
        <div className="form-container">
          <h1>Nova tarefa</h1>
          <div className="form-group">
            <label htmlFor="name">Nome:</label>
            <input
              id="name"
              name="name"
              type="text"
              value={name}
              onChange={(event) => {setName(event.target.value)}}
            />
          </div>

          <div className="form-group">
            <button type="submit">Adicionar</button>
          </div>
        </div>
      </form>

      <main>
        <h1>Lista de tarefas</h1>
        <ul>
          {todos.map((todo, index) => {
            return (
              <TodoItem
                key={index}
                todo={todo}
                remove={() => removeTodoItem(index)}
                markAsDone={() => markTodoAsDone(index)}
                markAsUndone={() => markTodoAsUnDone(index)}
              />
            );
          })}
        </ul>
      </main>
    </section>
  )
}
