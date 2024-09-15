export interface SelectProps {
  children?: React.ReactNode;
  id?: string;
  name?: string;
  value?: string;
  fullWidth?: boolean;
  onChange?: (event?: React.ChangeEvent<HTMLSelectElement>) => void;
  onFocus?: (event?: React.FocusEvent<HTMLSelectElement>) => void;
  onBlur?: (event?: React.FocusEvent<HTMLSelectElement>) => void;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: "py-1 px-2 text-sm",
  md: "py-2 px-4 text-md",
  lg: "py-3 px-6 text-lg",
};

const Select = ({ children, size = "md", fullWidth, ...rest }: SelectProps) => {
  return (
    <div
      className={`
        ${fullWidth ? "w-full" : ""}
      `}
    >
      <select
        className={`
          bg-white
          border border-primary
          rounded-sm
          ${sizes[size]}
          ${rest.disabled ? "cursor-not-allowed" : ""}
          ${fullWidth ? "w-full" : ""}
          focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
        `}
        {...rest}
      >
        {children}
      </select>
    </div>
  );
};

export default Select;
