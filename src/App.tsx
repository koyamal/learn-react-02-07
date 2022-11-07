import axios from "axios";
import { useState } from "react";
import "./styles.css";

import { Todo } from "./Todo";

export default function App() {
  const [todos, setTodos] = useState<any>([]);
  const onClickFetchData = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      setTodos(res.data);
      console.log(res);
    });
  };
  return (
    <div className="App">
      <button onClick={onClickFetchData}>Get Data</button>
      {todos.map((todo) => {
        return <Todo key={todo.id} title={todo.title} userid={todo.userid} />;
      })}
    </div>
  );
}
