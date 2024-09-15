import { default as SelectComponent } from "./select";
import { default as Option } from "./select-option";

type SelectType = typeof SelectComponent & {
  Option: typeof Option;
};

const Select = SelectComponent as SelectType;
Select.Option = Option;

export default Select;
