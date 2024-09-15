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
    <div className="breadcrumbs">
      {items.map((item, index) => (
        <span key={index}>
          {index > 0 && <span className="text-gray-400"> / </span>}
          <span
            onClick={item.onClick}
            className={`
              ${index === items.length - 1 ? "text-primary" : "text-gray-400"}
              ${item.onClick ? "cursor-pointer" : ""}
              `}
          >
            {item.label}
          </span>
        </span>
      ))}
    </div>
  );
};

export default Breadcrumbs;
