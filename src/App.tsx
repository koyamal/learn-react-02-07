import axios from "axios";
import { useState } from "react";
import "./styles.css";

import { Todo } from "./Todo";
import { TodoType } from "./types/todo";
import { Text } from "./Text";

export default function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);
  const onClickFetchData = () => {
    axios
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTodos(res.data);
        // setTodos('res.data');
        console.log(res);
      });
  };
  return (
    <div className="App">
      <Text color="red" fontSize="18px" />
      <button onClick={onClickFetchData}>Get Data</button>
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            title={todo.title}
            userId={todo.userId}
            completed={todo.completed}
          />
        );
      })}
    </div>
  );
}