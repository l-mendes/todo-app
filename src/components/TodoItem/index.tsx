type TodoItemProps = {
  todo: {
    name: string;
    done: boolean;
  },
  remove: () => void;
  markAsDone: () => void;
  markAsUndone: () => void;
}

export function TodoItem(props: TodoItemProps) {
  function handleDoneChecked(checked: boolean) {
    checked ? props.markAsDone() : props.markAsUndone();
  }

  return (
    <li className={`${props.todo.done && 'done'}`}>
      <strong>{props.todo.name}</strong>

      <div className="actions-container">
        <input type="checkbox" onChange={(event) => handleDoneChecked(event.target.checked)} />
        <button className="remove-button" type="button" onClick={props.remove}>X</button>
      </div>
    </li>
  )
}
