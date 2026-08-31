"use client";
import React from "react";
import Button from "../ui/Button";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/16/solid";
import { MultiSelect, SelectOption } from "./MultiSelectCombobox";
import type { Dictionary } from "@/i18n/dictionaries";

type ClubsFilterProps = {
  filter: ClubFilterType;
  onFilterChange: (filter: ClubFilterType) => void;
  labels: Dictionary["clubs"];
};

export type ClubFilterType = {
  searchTerm: string;
  selectedOptions: SelectOption[];
};

export default function ClubsFilter({
  filter,
  onFilterChange,
  labels,
}: ClubsFilterProps) {
  const options: SelectOption[] = [
    { label: labels.options.all, value: "all" },
    { label: labels.options.sports, value: "sports" },
    { label: labels.options.strategy, value: "strategy" },
    { label: labels.options.literature, value: "literature" },
  ];
  const removeSelectedOption = (valueToRemove: string) => {
    const nextSelected = filter.selectedOptions.filter(
      (option) => option.value !== valueToRemove,
    );
    onFilterChange({ ...filter, selectedOptions: nextSelected });
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value;
    onFilterChange({ ...filter, searchTerm });
  };

  const handleMultiSelectChange = (newSelected: SelectOption[]) => {
    onFilterChange({ ...filter, selectedOptions: newSelected });
  };

  return (
    <div className="w-full py-6 ">
      <div className="flex w-full flex-col gap-2 md:flex-row">
        <div className="relative w-full">
          <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            placeholder={labels.searchPlaceholder}
            value={filter.searchTerm}
            onChange={handleSearchChange}
            className="h-12 w-full rounded-xl border border-gray-300 bg-white p-3 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="w-full md:w-72">
          <MultiSelect
            options={options}
            value={filter.selectedOptions}
            onChange={handleMultiSelectChange}
            placeholder={labels.search}
            className="w-full h-12"
          />
        </div>
        <div className="w-full md:w-auto *:w-full md:*:w-auto">
          <Button>{labels.search}</Button>
        </div>
      </div>
      {filter.selectedOptions.length > 0 && (
        <div className="mt-5 flex flex-wrap">
          {filter.selectedOptions.map((option) => (
            <button
              type="button"
              key={option.value}
              onClick={() => removeSelectedOption(option.value)}
              className="cursor-pointer inline-flex items-center gap-1 bg-blue-100 text-blue-800 text-sm pl-3 pr-1 py-1 rounded-full mr-2 mb-2 hover:bg-blue-200"
              aria-label={`${labels.removeFilter}: ${option.label}`}
            >
              <span className="leading-none pb-0.5">{option.label}</span>
              <span className="inline-flex items-center justify-center rounded-full">
                <XMarkIcon width={16} />
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
