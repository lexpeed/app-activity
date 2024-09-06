interface Props {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const buttonSize = "w-7 h-7";
const nonActiveButton = "text-gray-500";
const activeButton = "text-primary border rounded border-primary";

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}: Props) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  return (
    <div className="flex justify-center items-center space-x-2">
      <button
        disabled={currentPage === 1}
        className={buttonSize}
        onClick={() => onPageChange(currentPage - 1)}
      >
        {"<"}
      </button>

      <div className="flex justify-center items-center space-x-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            className={`
              ${buttonSize}
              ${page === currentPage ? activeButton : nonActiveButton}
            `}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        disabled={currentPage === totalPages || totalPages === 0}
        className={buttonSize}
        onClick={() => onPageChange(currentPage + 1)}
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
