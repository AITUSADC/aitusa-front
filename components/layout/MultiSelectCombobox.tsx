"use client";

import { CheckIcon } from "@heroicons/react/20/solid";
import Select, {
  MultiValue,
  OptionProps,
  StylesConfig,
  components,
} from "react-select";

export type SelectOption = {
  label: string;
  value: string;
};

type MultiSelectProps = {
  options: SelectOption[];
  value: SelectOption[];
  onChange: (value: SelectOption[]) => void;
  placeholder?: string;
  className?: string;
};

const selectStyles: StylesConfig<SelectOption, true> = {
  control: (base, state) => ({
    ...base,
    minHeight: "3rem",
    height: "3rem",
    borderRadius: "0.75rem",
    borderColor: state.isFocused ? "#3b82f6" : "#d1d5db",
    backgroundColor: "#ffffff",
    boxShadow: state.isFocused ? "0 0 0 2px #3b82f6" : "none",
    ":hover": {
      borderColor: state.isFocused ? "#3b82f6" : "#d1d5db",
    },
  }),
  valueContainer: (base) => ({
    ...base,
    padding: "0 0.75rem",
  }),
  placeholder: (base) => ({
    ...base,
    color: "#9ca3af",
  }),
  indicatorSeparator: (base) => ({
    ...base,
    display: "none",
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: "#9ca3af",
    padding: "0.5rem",
    ":hover": {
      color: "#6b7280",
    },
  }),
  clearIndicator: (base) => ({
    ...base,
    color: "#9ca3af",
    padding: "0.5rem",
    ":hover": {
      color: "#6b7280",
    },
  }),
  menu: (base) => ({
    ...base,
    borderRadius: "0.75rem",
    overflow: "hidden",
    marginTop: "0.375rem",
  }),
  menuList: (base) => ({
    ...base,
    padding: "0.375rem",
  }),
  option: (base, state) => ({
    ...base,
    borderRadius: "0.5rem",
    backgroundColor: state.isSelected
      ? "#dbeafe"
      : state.isFocused
        ? "#eff6ff"
        : "#ffffff",
    color: "#111827",
    cursor: "pointer",
  }),
};

function CheckboxOption(props: OptionProps<SelectOption, true>) {
  const { isSelected, label } = props;

  return (
    <components.Option {...props}>
      <div className="flex items-center gap-4">
        <span className="flex h-6 w-6 items-center justify-center rounded-md bg-gray-100 text-black">
          {isSelected ? <CheckIcon className="h-4 w-4" /> : null}
        </span>
        <span>{label}</span>
      </div>
    </components.Option>
  );
}

export function MultiSelect({
  options,
  value,
  onChange,
  placeholder = "Search...",
  className,
}: MultiSelectProps) {
  return (
    <Select
      isMulti
      isSearchable
      options={options}
      hideSelectedOptions={false}
      value={value}
      placeholder={placeholder}
      className={className}
      components={{ Option: CheckboxOption }}
      styles={selectStyles}
      closeMenuOnSelect={false}
      onChange={(newValue: MultiValue<SelectOption>) => {
        onChange([...newValue]);
      }}
      controlShouldRenderValue={false}
    />
  );
}
