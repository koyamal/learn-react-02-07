type TodoType = {
  userId: number;
  title: string;
  completed: boolean;
};

export const Todo = (props: TodoType) => {
  const { title, userId, completed } = props;
  const completedMark = completed ? "[Comp]" : "[Incomp]";
  return <p>{`${completedMark}: ${title}(USER: ${userId})`}</p>;
};
