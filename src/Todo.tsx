import { VFC } from "react";
import { TodoType } from "./types/todo";

export const Todo: VFC<Omit<TodoType, "id">> = (props) => {
  const { title, userId, completed } = props;
  const completedMark = completed ? "[Comp]" : "[Incomp]";
  return <p>{`${completedMark}: ${title}(USER: ${userId})`}</p>;
};
