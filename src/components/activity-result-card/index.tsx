interface Tag {
  label: string;
}

interface Props {
  children?: React.ReactNode;
  tags: Tag[];
}

const ActivityResultCart = ({ children, tags }: Props) => {
  return (
    <div className="bg-gray-100 p-4 rounded-sm h-60">
      <div className="flex gap-2 mb-4">
        {tags.map((tag, index) => {
          return (
            <span
              key={index}
              className="border border-primary text-sm text-gray-500 px-2 py-0.5 rounded-sm"
            >
              {tag.label}
            </span>
          );
        })}
      </div>
      {children}
    </div>
  );
};

export default ActivityResultCart;
