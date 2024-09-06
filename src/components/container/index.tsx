import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Container = ({ children }: Props) => {
  return <div className="max-w-screen-md mx-auto px-4">{children}</div>;
};

export default Container;
