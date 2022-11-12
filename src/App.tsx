import axios from "axios";
import { useState } from "react";
import "./styles.css";

import { Todo } from "./Todo";
import { TodoType } from "./types/todo";
import { Text } from "./Text";
import { UserProfile } from "./UserProfile";
import { User } from "./types/user";

export default function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);
  const onClickFetchData = () => {
    axios
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTodos(res.data);
        console.log(res);
      });
  };
  const user: User = {
    name: "Tommy",
    hobbies: ["Jog", "Game"]
  };
  return (
    <div className="App">
      <UserProfile user={user} />
      <Text color="blue" fontSize="24px" />
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
