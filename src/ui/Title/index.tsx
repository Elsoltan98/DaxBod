import { FC } from "react";

interface TitleProps {
  children: React.ReactNode;
}

const Title: FC<TitleProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Title;
