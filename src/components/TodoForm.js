import { useState } from "react";

const TodoForm = (props) => {
  const { addTodo } = props;
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // 제출 시 새로고침 방지
    // console.log("value: ", value);
    if (value) {
      addTodo(value);
      setValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Todo를 입력해주세요..."
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <input type="submit" />
    </form>
  );
};

export default TodoForm;
