export interface SelectOptionProps {
  value?: string;
  children: string;
}

const Option = ({ value, children }: SelectOptionProps) => {
  return <option value={value}>{children}</option>;
};

export default Option;
