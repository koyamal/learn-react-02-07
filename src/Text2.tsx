import { VFC } from "react";

type Props = {
  color?: string;
  fontSize?: string;
  content: string;
  backgroundColor?: string;
};

export const Text2: VFC<Props> = (props) => {
  const { color = "black", fontSize = "24px", content, backgroundColor = "red" } = props;
  return <p style={{ color, fontSize, backgroundColor }}>{content}</p>;
};
