import { FC } from "react";

interface ContentProps {
  children: React.ReactNode;
}

const Content: FC<ContentProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Content;
