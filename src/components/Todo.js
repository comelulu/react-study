const Todo = (props) => {
  const { todo, updateTodo, deleteTodo } = props;

  return (
    <div>
      <li>
        Name: {todo.name} --- Completed: {String(todo.completed)} ---
        <button onClick={() => deleteTodo(todo.id)}>
          Delete Todo
        </button>
        <button onClick={() => updateTodo(todo.id)}>
          Update Todo
        </button>
      </li>
    </div>
  );
};

export default Todo;
