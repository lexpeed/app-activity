interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className={`max-w-screen-lg mx-auto w-full px-4`}>{children}</div>
  );
};

export default Container;
