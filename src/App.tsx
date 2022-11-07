import axios from "axios";
import { useState } from "react";
import "./styles.css";

export default function App() {
  const [todos, setTodos] = useState<any>([]);
  const onClickFetchData = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      setTodos(res.data);
    });
  };
  return (
    <div className="App">
      <button onClick={onClickFetchData}>Get Data</button>
      {todos.map((todo) => {
        return <p>{todo.title}</p>;
      })}
    </div>
  );
}
