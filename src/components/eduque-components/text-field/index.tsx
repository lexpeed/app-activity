export interface TextFieldProps {
  id?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  onChange?: (e?: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e?: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e?: React.FocusEvent<HTMLInputElement>) => void;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: "py-1 px-2 text-sm",
  md: "py-2 px-4 text-md",
  lg: "py-3 px-6 text-lg",
};

const TextField = ({
  id,
  label,
  fullWidth,
  size = "md",
  ...rest
}: TextFieldProps) => {
  return (
    <div className={`${fullWidth ? "w-full" : ""}`}>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        type="text"
        {...rest}
        style={{ lineHeight: "normal" }}
        className={`
          bg-white
          border border-primary
          rounded-sm
          ${sizes[size]}
          ${rest.disabled ? "cursor-not-allowed" : ""}
          ${fullWidth ? "w-full" : ""}
          focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
        `}
      />
    </div>
  );
};

export default TextField;
