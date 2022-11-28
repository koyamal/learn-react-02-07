import axios from "axios";
import { useState } from "react";
import "./styles.css";

import { Todo } from "./Todo";
import { TodoType } from "./types/todo";
import { Text } from "./Text";
import { Text2 } from "./Text2";
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
    hobbies: ["Jog", "Game", "Movie", "Internet", "Soccer", "Cooking"]
  };
  return (
    <div className="App">
      <UserProfile user={user} />
      <Text color="blue" fontSize="30px" content="This is Text Component." />
      <Text content="This is Text Component." />
      <Text color="pink" content="This is Text Component." />
      <Text color="yellow" fontSize="18px" content="This is Text Component." />
      <Text color="red" fontSize="32px" content="Is this Text Component?" />
      <Text2 color="blue" fontSize="32px" content="Is this Text Component?" />
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
