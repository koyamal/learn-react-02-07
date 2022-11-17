import { VFC } from "react";

type Props = {
  color?: string;
  fontSize?: string;
};

export const Text: VFC<Props> = (props) => {
  const { color = "black", fontSize = "24px" } = props;
  return <p style={{ color, fontSize }}>This is Text Component.</p>;
};
