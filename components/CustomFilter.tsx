import React from "react";

interface OptionItem {
  title: string;
  value: string;
}

interface CustomFilterProps {
  title: string;
  options: OptionItem[];
  value: string;
  onChange: (value: string) => void;
}

const CustomFilter = ({ title, options, value, onChange }: CustomFilterProps) => {
  return (
    <div className="flex items-center gap-2">
      <label className="text-sm text-gray-600" htmlFor={`filter-${title}`}>
        {title}
      </label>
      <select
        id={`filter-${title}`}
        className="px-3 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((opt) => (
          <option key={`${title}-${opt.value}`} value={opt.value}>
            {opt.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomFilter;
