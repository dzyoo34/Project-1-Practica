import React from "react";

interface CustomFilterProps {
  title: string;
}

const CustomFilter = ({ title }: CustomFilterProps) => {
  return (
    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
      {title}
    </button>
  );
};

export default CustomFilter;
