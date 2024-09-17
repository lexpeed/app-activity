interface Breadcrumb {
  label: string;
  url?: string;
  onClick?: () => void;
}

interface Props {
  items: Breadcrumb[];
}

const Breadcrumbs = ({ items }: Props) => {
  return (
    <div className="inline-flex gap-2">
      {items.map((item, index) => (
        <>
          {index > 0 && <span className="text-gray-400"> / </span>}
          <span
            key={item.label}
            onClick={item.onClick}
            className={`
              ${index === items.length - 1 ? "text-primary" : "text-gray-400"}
              ${item.onClick ? "cursor-pointer" : ""}
              `}
          >
            {item.label}
          </span>
        </>
      ))}
    </div>
  );
};

export default Breadcrumbs;
