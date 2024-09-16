import { Button, Tag } from "@/components/eduque-components";

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
      <div className="flex gap-2 flex-wrap">
        {tags.map((tag) => {
          return <Tag key={tag.label}>{tag.label}</Tag>;
        })}
      </div>
      <span
        className={`
          line-clamp-6
          sm:line-clamp-4
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
