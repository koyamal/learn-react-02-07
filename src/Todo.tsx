import { TodoType } from "./types/todo";

export const Todo = (props: Omit<TodoType, "id">) => {
  const { title, userId, completed } = props;
  const completedMark = completed ? "[Comp]" : "[Incomp]";
  return <p>{`${completedMark}: ${title}(USER: ${userId})`}</p>;
};
