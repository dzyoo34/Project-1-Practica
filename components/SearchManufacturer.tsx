"use client";
import Image from "next/image";
import { useState, Fragment } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { manufacturers } from "@/constants";
import { SearchManufacturerProps } from "@/types";

const SearchManufacturer = ({ manufacturer, setManufacturer }: SearchManufacturerProps) => {
  const [query, setQuery] = useState("");

  const normalizedQuery = query.toLowerCase().replace(/\s+/g, "");
  const filteredManufacturers =
    normalizedQuery === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item.toLowerCase().replace(/\s+/g, "").includes(normalizedQuery)
        );

  return (
    <div className="search-manufacturer">
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px] left-3">
            <Image src="/car-logo.svg" width={20} height={20} className="ml-4" alt="Car Logo" />
          </Combobox.Button>

          <Combobox.Input
            className="searchbar__input"
            placeholder="Volkswagen"
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setQuery((e.target as HTMLInputElement).value)}
          />

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 overflow-auto rounded-md py-1">
              {filteredManufacturers.length === 0 ? (
                <div className="px-4 py-2 text-sm text-gray-500">Нет результатов</div>
              ) : (
                filteredManufacturers.map((item) => (
                  <Combobox.Option
                    key={item}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 px-4 ${active ? "bg-blue-700 text-white" : "text-gray-900"}`
                    }
                    value={item}
                  >
                    {({ selected, active }) => (
                      <>
                        <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                          {item}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "text-white" : "text-teal-600"
                            }`}
                          />
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
