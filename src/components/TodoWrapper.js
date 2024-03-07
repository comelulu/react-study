import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);
  // Todo: input 태그에 입력한 문자열
  const addTodo = (todo) => {
    setTodos([
      ...todos,
      {
        name: todo,
        completed: false,
        id: uuidv4(),
      },
    ]);
  };

  const deleteTodo = (id) => {
    // Map, Filter 새로운 배열 리턴해준다.
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  return (
    <>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) => (
        <Todo
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
          todo={todo}
        />
      ))}
    </>
  );
};

export default TodoWrapper;
