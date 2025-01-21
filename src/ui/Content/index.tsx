import { FC } from "react";

interface ContentProps {
  children: React.ReactNode;
}

const Content: FC<ContentProps> = ({ children }) => {
  return <div className="flex-1 flex flex-col gap-5">{children}</div>;
};

export default Content;
