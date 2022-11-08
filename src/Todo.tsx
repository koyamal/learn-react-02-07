export const Todo = (props) => {
  const { title, userid, completed } = props;
  const completedMark = completed ? "[Comp]" : "[Incomp]";
  return <p>{`${completedMark}: ${title}(USER: ${userid})`}</p>;
};
