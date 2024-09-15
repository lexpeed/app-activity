import Button from "../button";

interface Tag {
  label: string;
}

interface Props {
  children?: React.ReactNode;
  tags: Tag[];
  onClick?: () => void;
}

const ActivityResultCart = ({ children, tags, onClick }: Props) => {
  return (
    <div
      className={`
        bg-gray-100 py-4 px-8 rounded-sm
        flex flex-col justify-between gap-4
        ${onClick ? "cursor-pointer" : ""}
      `}
      onClick={onClick}
    >
      <div className="flex gap-2">
        {tags.map((tag, index) => {
          return (
            <span
              key={index}
              title={tag.label}
              className={`
                border border-primary text-sm text-gray-500 px-2 py-0.5 rounded-sm
                bg-white truncate ...
              `}
            >
              {tag.label}
            </span>
          );
        })}
      </div>
      <span
        className={`
          line-clamp-4
        `}
      >
        {children}
      </span>
      <div className="text-center">
        <Button onClick={onClick} color="primary">
          <span className="text-sm">View Details</span>
        </Button>
      </div>
    </div>
  );
};

export default ActivityResultCart;
