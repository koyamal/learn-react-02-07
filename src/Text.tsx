import { VFC } from "react";

type Props = {
  color?: string;
  fontSize?: string;
  content: string;
};

export const Text: VFC<Props> = (props) => {
  const { color = "black", fontSize = "24px", content } = props;
  return <p style={{ color, fontSize }}>{content}</p>;
};
