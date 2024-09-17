interface TagProps {
  children: string;
}

const Tag = ({ children }: TagProps) => {
  return (
    <span
      title={children}
      className={`
      border border-primary
      text-sm text-gray-500 text-nowrap
      px-2 py-0.5
      rounded-sm
      bg-white
    `}
    >
      {children}
    </span>
  );
};

export default Tag;
